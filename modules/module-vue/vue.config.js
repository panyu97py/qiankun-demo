const {name: APP_NAME, port} = require('./package')
module.exports = {
    devServer: {
        port,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: `${APP_NAME}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${APP_NAME}`,
        },
    },
}
