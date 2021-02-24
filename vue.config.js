const webpack = require("webpack");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Better-Roblox/' : '/',
    pwa: {
        name: 'Better Roblox',
        themeColor: '#33b5e5',
        iconPaths: {
            favicon32: 'static/icons/favicon-32x32.png',
            favicon16: 'static/icons/favicon-16x16.png',
            appleTouchIcon: 'static/icons/apple-touch-icon.png',
            maskIcon: 'static/icons/safari-pinned-tab.svg',
            msTileImage: 'static/icons/mstile-150x150.png',
        },
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