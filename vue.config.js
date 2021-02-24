const webpack = require("webpack");

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/Better-Roblox/' : '/',
    pwa: {
        name: 'Better Roblox',
        themeColor: '#33b5e5',
        msTileColor: '#282b30',
        iconPaths: {
            favicon32: 'static/icons/favicon-32x32.png',
            favicon16: 'static/icons/favicon-16x16.png',
            appleTouchIcon: 'static/icons/apple-touch-icon.png',
            maskIcon: 'static/icons/safari-pinned-tab.svg',
            msTileImage: 'static/icons/mstile-150x150.png',
        },
        manifestOptions: {
            background_color: '#282b30',
            display: 'minimal-ui',
            icons: [
                {
                    src: './static/icons/android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
                {
                    src: './static/icons/android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable',
                },
            ],
        },

        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js',
            exclude: ['CNAME', /\.map$/]
        }
    }
}