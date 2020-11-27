const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
module.exports = {
    configureWebpack: {
        plugins: [
            new MomentLocalesPlugin({
                localesToKeep: ['zh-cn', 'en']
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/, options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        },
    },

    devServer: {
        open: true,
        host: '192.168.1.120',
        https: false, 
        port: 8080,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {  //配置跨域
            '': {
                target: 'http://localhost:3000',  //这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,  //允许跨域
            }
        }
    }
}