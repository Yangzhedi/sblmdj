# sblmdj

> A webpack project

[![ENV](https://img.shields.io/badge/react-^15.6.1-blue.svg)](https://github.com/Yangzhedi/sblmdj)
[![ENV](https://img.shields.io/badge/antd-2.0.0-blue.svg)](https://github.com/Yangzhedi/sblmdj)
[![ENV](https://img.shields.io/badge/webpack-^3.0.0-blue.svg)](https://github.com/Yangzhedi/sblmdj)

### Install & Start

```shell
npm i  # npm i --save-dev webpack@2 webpack-dev-server@2 extract-text-webpack-plugin
npm start
```

open http://localhost:8000/

### Build

```sh
npm run build  # then see dist dir
# Note: you should remove `webpack-visualizer-plugin / webpack-bundle-analyzer` 
code in webpack.config.js file for production environment.
```

bundle analyzer tools: 
[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) / 
[webpack-visualizer-plugin](https://www.npmjs.com/package/webpack-visualizer-plugin) 
(Note: [just for dist bundle file analyse](https://github.com/th0r/webpack-bundle-analyzer/issues/86))
