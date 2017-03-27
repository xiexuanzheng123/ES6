var webpack = require('webpack');

module.exports = {
    entry:'./js/4-string/template-string.js',
    output: {
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader: "style-loader!css-loader"}
        ]
    }
}