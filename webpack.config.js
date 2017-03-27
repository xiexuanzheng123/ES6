var webpack = require('webpack');

module.exports = {
    entry:'./js/2--letAndConst/let/blockScope.js',
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