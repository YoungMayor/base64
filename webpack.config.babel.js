const { join } = require('path')

const include = join(__dirname, 'src')

module.exports = {
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'base64',
    },
    devtool: 'source-map',
    // module: {
    //     loaders: [
    //         { test: /\.js$/, loader: 'babel', include },
    //         { test: /\.json$/, loader: 'json', include },
    //     ]
    // }
}