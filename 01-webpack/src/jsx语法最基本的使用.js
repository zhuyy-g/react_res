import React from 'react'
import ReactDOM from 'react-dom'

// JSX语法的本质 在运行的时候 被转换成了React.createElement 形式来执行的
const mydiv = <div id="mydiv" title="这是一个div元素">这是一个div元素</div>

ReactDOM.render(mydiv, document.getElementById('app'))