import React from 'react'

export default class BindEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '哈哈'
        }
    }
    render() {
        return <div>
            BindEvent组件
            <hr/>
            {/* 在react 中的事件处理机制 是小驼峰命名 */}
            {/* <button onClick={function(){console.log("ok")}}>按钮呀</button> */}
            {/* <button onClick={this.myClickHandler}>按钮呀</button> */}
            {/* <button onClick={() => this.myClickHandler()}>按钮呀</button> */}
            {/* 可以直接用下面的方法传递参数 */}
            <button onClick={ () => this.show('猪头','披萨') }>按钮呀</button>
            <h3>{this.state.msg}</h3>
        </div>
    }
    // 这是一个实例方法
    myClickHandler() {
        console.log("2222")
    }
    
    show(arg1, arg2) {
        console.log("show方法被调用了" + arg1 + arg2)
        // 下面展示state设置赋值的方法 
        // 注意： this.setState方法是异步的 如果想在调用完这个方法后 立刻获取最新的值 要用回调函数
        this.setState({
            msg: arg1 + arg2
        }, function() {
            console.log(this.state.msg)
        })
    }
}