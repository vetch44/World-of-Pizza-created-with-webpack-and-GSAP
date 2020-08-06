const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');;

module.exports = {

  entry: './src/javascript/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist")
},
  module: {
    rules: [
        {
            test: /\.(png|jpe?g|gif|svg|ico)$/,
            use: [
                   {
                     loader: "file-loader",
                     options: {
                       outputPath: 'images'
                     }
                   }
                 ]
          },
          {
            test: /\.html$/,
            use: ['html-loader']
        },
        {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
              },    
            {
                 loader: "css-loader",
               },
               {
                 loader: "postcss-loader"
               },
               {
                 loader: "sass-loader",
                 options: {
                   implementation: require("sass")
                 }
               }
             ]
      }
    ]
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/index.html'
        }),
    new HtmlWebpackPlugin({
      filename: 'more.html',
      template: 'src/html/more.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/html/about.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: 'src/html/menu.html',
    }),
        new MiniCssExtractPlugin({
      filename: "bundle.css"
    })
  
  ],
  mode: 'development'
};