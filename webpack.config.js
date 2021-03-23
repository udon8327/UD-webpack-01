const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './js/index.js',
    page: './js/page.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js?[hash:8]',
    // publicPath: ''
  },
  devServer: {
    compress: true, // 是否啟用 gzip 壓縮 預設為false
    port: 3000, // port端口 預設為8080 若被佔用則使用8081
    host: '0.0.0.0', // 預設值為'127.0.0.1'本機 想讓區網中其他裝置存取需設為'0.0.0.0'
    useLocalIp: true, // 使用本機ip而非localhost
    open: false, // 啟動時是否自動開啟頁面
    https: true, // 是否開啟https
    // hot: true,
    // stats: { // 精準控制要顯示的 bundle 訊息
    //   assets: true,
    //   cached: false,
    //   chunkModules: false,
    //   chunkOrigins: false,
    //   chunks: false,
    //   colors: true,
    //   hash: false,
    //   modules: false,
    //   reasons: false,
    //   versions: false,
    //   warnings: false
    // }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false // 不壓縮 HTML
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true // 美化 HTML 的編排 (不壓縮HTML的一種)
            }
          }
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              injectType: 'singletonStyleTag', // 多個CSS合併為單一個style標籤
              publicPath: '../', // 指定公共路徑
              // hmr: true, // 開啟 HMR 支持
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
          'sass-loader'
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              injectType: 'singletonStyleTag', // 多個CSS合併為單一個style標籤
              publicPath: '../', // 指定公共路徑
              // hmr: true, // 開啟 HMR 支持
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            },
          },
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[ext]?[hash:8]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV === 'production' ? false : true, // 只在 production 環境啟用壓縮
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ],
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        // { from: 'css', to: 'css' },
        // { from: 'img', to: 'img' },
        { from: 'assets', to: 'assets' }
      ]
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery' //這邊以上是新增
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
    }),
    // new HtmlWebpackPlugin({
    //   template: './pug/index.pug',
    //   filename: 'index.html',
    //   inject: true,
    //   chunks: ['index'],
    //   minify: {
    //     sortAttributes: true,
    //     collapseWhitespace: false, // 折疊空白字元就是壓縮Html
    //     collapseBooleanAttributes: true, // 折疊布林值属性，例:readonly checked
    //     removeComments: true, // 移除註釋
    //     removeAttributeQuotes: true // 移除屬性的引號
    //   }
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    modules: [path.resolve(__dirname, 'node_modules')],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  // devtool: 'source-map', // 輸出source-map以方便直接偵錯ES6原始程式
  externals: { // 排除已使用javascript全域變數的模組
    jquery: 'jQuery'
  },
};

glob.sync('./src/pug/*.pug').forEach((path) => {
  const start = path.indexOf('/pug/') + 5;
  const end = path.length - 4;
  const name = path.slice(start, end);
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './pug/' + name + '.pug',
      filename: name + '.html',
      inject: true,
      chunks: [name],
      minify: {
        sortAttributes: true,
        collapseWhitespace: false, // 折疊空白字元就是壓縮Html
        removeComments: true, // 移除註釋
      }
    })
  );
});

module.exports = config;
