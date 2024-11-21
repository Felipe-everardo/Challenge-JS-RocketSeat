const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin")

// npm install --save-dev webpack-cli

// npm install --save-dev babel-loader @babel/core @babel/preset-env

//   "scripts": {
//   "build": "webpack",
//   "dev": "webpack serve",
//   "server": "json-server --watch server.json --port 3333"
//  }

// npm run build para aplicar os modulos a pasta dist
module.exports = {
  target: "web", // Define o ambiente-alvo para o build, que aqui é "web", indicando que o código gerado será executado em um navegador.
  mode: "development", // Define o modo de operação do Webpack. O modo "development"

  entry: path.resolve(__dirname, 'src', 'main.js'), // Gerar um arquivo main.js na pasta dist.
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  // npm i webpack-dev-server@latest --save-dev
  devServer: {  // configurando webpack para o servidor "devServer "
    static: {
      directory: path.join(__dirname, 'dist')
    },
    port: 3000,
    open: true, // Faz com que o Webpack Dev Server abra automaticamente o navegador na URL 
    liveReload: true, // Habilita o recurso de live reloading, que atualiza automaticamente a página no navegador 
  },

  // npm i html-webpack-plugin@latest --save-dev
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "logo.svg")
    }),

    //  npm i copy-webpack-plugin@latest
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets")
        },
      ],
    }),
  ],

  //  npm i style-loader@latest css-loader@latest --save-dev
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          },
        },
      }
    ]
  }
}