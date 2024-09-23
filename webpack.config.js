const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
// const { merge } = require("webpack-merge");
const BundleTracker = require('webpack-bundle-tracker');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const glob = require('glob');
const CopyPlugin = require("copy-webpack-plugin");
// const htmlFiles = glob.sync('./src/public/*.html').map(file => {
// const htmlFiles = glob.sync('./src/public/*.{html,}').map(file => {
//   return new HtmlWebpackPlugin({
//     template: file,
//     filename: path.basename(file), // имя выходного файла
//     minify: {
//       collapseWhitespace: false
//     }
//   });
// });

module.exports = {
  entry: './src/index.ts',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, './dist'), // '../static'
    filename: 'main-[id]-[hash].js',
    publicPath: '/',
    clean: true,

  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, './babel.config.js'),
            }
          },
        ],
        exclude: [
          path.resolve(__dirname, "node_modules"),

        ]

      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(eot|svg|png|jpg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'pic/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]', // Output filename format
              outputPath: 'fonts/', // Output directory for fonts
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',

        ],

      },
    ]
  },

  plugins: [
    new Dotenv(),
    new BundleTracker({
      path: path.join(__dirname, 'src/bundles'),
      filename: 'webpack-stats.json'
    }),
    new CopyPlugin({
      patterns: [
        { from: "src\\components\\parts\\content", to: "content" },
        { from: "src\\img\\visa.jpg", to: "content" },
        { from: "src\\img\\sber-bottom.jpg", to: "content" },
        { from: "src\\img\\master-c.jpg", to: "content" },
        { from: "src\\img\\YAndex.jpg", to: "content" },
        { from: "src\\img\\webmani.jpg", to: "content" },
        { from: "src\\img\\qiwi.jpg", to: "content" },
        { from: "src\\img\\komp.jpg", to: "content" },
      ],
    }),
    new SpriteLoaderPlugin(), // svg

    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      minify: {
        // exclude the minification
        collapseWhitespace: false
      }
    }),

    // ...htmlFiles,
    new webpack.SourceMapDevToolPlugin({
      test: /\.tsx?$/,
      filename: './dist/maps/[file].map.[query]',
      include: path.resolve(__dirname, 'src/'),
    }),

    new ESLintPlugin({
      files: path.resolve(__dirname, 'src/scripts'),

    }),

    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),
  ],
  watchOptions: {
    ignored: [
      "node_modules",
      "**/node_modules"
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // '../static'

    },


    watchFiles: [
      'dist',
    ],
    hot: true, // Включение горячей перезагрузки
    liveReload: true, // Включение live-reload

    compress: true,
    historyApiFallback: true
    // open: true, // Автоматическое открытие браузера
    // port: 8080
  },

  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js", ".svg"],
    plugins: [new TsconfigPathsPlugin(),],
    modules: [
      path.resolve(__dirname, "./.browserslistrc"),
      path.resolve(__dirname, "node_modules"),
      path.resolve(__dirname, "dist")
    ],

    alias: {
      // "@Interfaces": [
      //   path.resolve(__dirname, "src/interfaces.ts")
      // ],
      // "@Services": [
      //   path.resolve(__dirname, 'src/scripts/services')
      // ],

    }
  },

};

