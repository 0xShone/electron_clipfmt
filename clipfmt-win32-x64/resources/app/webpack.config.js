// from(http://socym.co.jp/download/1114/sample.zip)
const path = require('path')
const webpack = require('webpack')
const externalPlugins = new webpack.ExternalsPlugin('commonjs', [
    'app',
    'auto-updater',
    'browser-window',
    'content-tracing',
    'dialog',
    'electron',
    'global-shortcut',
    'ipc',
    'menu',
    'menu-item',
    'power-monitor',
    'protocol',
    'tray',
    'remote',
    'web-frame',
    'clipboard',
    'crash-reporter',
    'screen',
    'shell'
])

module.exports = {
    entry: {
        index: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'out'),
        filename: '[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
    target: 'node',
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        externalPlugins
    ]
}
