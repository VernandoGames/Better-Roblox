const webpack = require("webpack");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    pwa: {
        name: 'Better Roblox',
        themeColor: '#33b5e5',
        manifestOptions: {
            background_color: '#282b30',
            display: 'minimal-ui'
        },

        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
            exclude: ['CNAME', /\.map$/]
        }
    }
}