import React from 'react'
import ReactDOM from 'react-dom'
// 导入Hello组件 如果不做单独的配置的话 不能省略 .jsx后缀名
// 注意：这里的@符号 表示 项目根目录中的src这一层目录
import Hello from '@/components/Hello'
// import '@/class-基本使用'
// import '@/class-继承'

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

// class 关键字创建组件
class Movie extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: '大家好 我是class创建的Movie组件'
        }
    }
    // render方法的作用是渲染当前组件对应的虚拟DOM元素
    render() {
        // props是只读属性 不可以修改
        // this.props.age = 14
        return <div>
                    这是Movie组件 --- {this.props.name} --- {this.props.age}
                    <h1>{this.state.msg}</h1>
              </div>
    }
}

ReactDOM.render(
    <div>
        123
        {}
        <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>
        <Movie name={dog.name} age={dog.age}></Movie>
    </div>,document.getElementById('app')
)


var o2 = {
    age: 22,
    address: '中国北京',
    phone: '139999'
}

// var o1 = {
//     name: 'zs',
//     age: o2.age,
//     address: o2.address,
//     phone: o2.phone
// }

var o1 = {
    name: 'zs',
    ...o2
}

// console.log(o1)