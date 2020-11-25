const path = require("path");
module.exports = {
    // entry: './path/to/my/entry/file.js'
    chainWebpack(config) {
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule
            .test(/\.svg$/)
            .include.add(path.resolve(__dirname, './src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        const fileRule = config.module.rule('file')
        fileRule.uses.clear()
        fileRule.test(/\.svg$/)
            .exclude.add(path.resolve(__dirname, './src/icons'))
            .end().use('file-loader')
            .loader('file-loader');
        config.module.rule('vue').use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                Object.assign(options, {
                    transformAssetUrls: {
                        audio: "src"
                    }
                })
            })
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            config: {
                                path: 'postcss.config.js'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp3)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    }
};