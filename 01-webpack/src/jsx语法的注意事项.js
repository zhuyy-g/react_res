import React from 'react'
import ReactDOM from 'react-dom'

// js语句后面一定要写分号 ： 对行首字符进行判断 是否是 [ ( + - /五个符号之一
let a = 1
let str = '你好 中国'
let boo = true
let title = '999'
const h1 = <h1>红红火火恍恍惚惚</h1>
const arr = [
    <h2>这是H2</h2>,
    <h3>这是H3</h3>
]
const arrStr = ['毛利兰', '柯南', '小五郎', '灰原哀']
// 定义一个空数组 将来用来存放 名称 标签
const nameArr = []
arrStr.forEach(v=>{
    const temp = <h5 key={v}>{v}</h5>
    nameArr.push(temp)
})

ReactDOM.render(
<div>
    {a + 2}
    <hr/>
    {str}
    <hr/>
    {boo ? '条件为真' : '条件为假'}
    <hr/>
    <p title={title}>这是P标签</p>
    <hr/>
    {h1}
    <hr/>
    {arr}
    <hr/>
    {/* {nameArr} */}
    <hr/>
    {arrStr.map(v=><h5 key={v}>{v}</h5>)}
    <hr/>
    {/* 注意 在jsx语法中 class 一定要写作 className (class在js语义中会有歧义) */}
    <p className="myele"></p>
</div>,document.getElementById('app'))