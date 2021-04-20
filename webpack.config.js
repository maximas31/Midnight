// const path = require('path');
// const outputDir = path.resolve(__dirname, 'dist');

module.exports = {
    // entry: path.resolve(__dirname, 'src'),
    output: {
        // path: outputDir,
        filename: 'bundle.js'
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
   }
};