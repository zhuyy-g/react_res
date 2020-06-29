import React, {Component} from 'react'

export default class App extends Component {

    state = {
        count: 0
    }

    increment = () => {
        // 1.得到选择增加数量
        const number = this.select.value*1
        // 2.得到原本的count值 并计算新的count
        const count = this.state.count + number
        // 3. 更新状态
        this.setState({count})
    }

    decrement = () => {
        // 1.得到选择增加数量
        const number = this.select.value*1
        // 2.得到原本的count值 并计算新的count
        const count = this.state.count - number
        // 3. 更新状态
        this.setState({count})
    }

    incrementIfOdd = () => {
        // 1.得到选择增加的数量
        const number = this.select.value*1
        // 2.得到原有的count值 并计算新的count值
        const count = this.state.count + number
        if(count%2 === 1) {
            this.setState({count})
        }
    }

    incrementAsync = () => {
        const number = this.select.value*1
        const count = this.state.count + number
        // 用以下方法来模拟异步操作
        setTimeout(() => {
            this.setState({count})
        },1000)
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={ select => this.select = select }>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>&nbsp;
                    <button onClick={this.decrement}>-</button>&nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}