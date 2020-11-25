import IconSvg from '../components/svgIcon/base.vue';
// // 全局注册icon-svg
// // requires and returns all modules that match
const requireAll = requireContext => requireContext.keys().map(requireContext);
// // import all svg
const req = require.context('./svg', true, /\.svg$/);
requireAll(req);
export default IconSvg