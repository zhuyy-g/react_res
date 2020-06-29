console.log("项目构建成功")

// webpack-dev-server 打包的main.js托管到了内存中 所以在项目根目录当中看不到

import React from 'react'
import ReactDOM from 'react-dom'

// const myh1 = React.createElement('h1', null, '这是一个大大的h1')
const myh1 = React.createElement('h1', { id: 'myh1', title: 'this is a h1' }, '这是一个大大的h1')
const mydiv = React.createElement('div', null, '这是一个div元素', myh1)
// 使用ReactDOM将虚拟DOM渲染到页面上 参数一：要渲染的虚拟DOM元素  参数二：指定页面上的一个元素（DOM元素而不是选择器）
ReactDOM.render(mydiv   , document.getElementById('app'))