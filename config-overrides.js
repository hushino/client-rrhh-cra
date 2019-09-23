const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const darkTheme = require('@ant-design/dark-theme'); //https://github.com/ant-design/ant-design-dark-theme/blob/master/index.ts
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        //modifyVars: { '@primary-color': '#1DA57A' },
    }),
);