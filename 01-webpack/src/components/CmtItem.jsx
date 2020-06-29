import React from 'react'

// 对样式的第一层封装  将样式与UI结构分离
// const itemStyle = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
// const userStyle = {fontSize: '14px'}
// const contentStyle = {fontSize: '12px'}

// 对样式的第二层封装  合并为一个大的样式对象
// const style = {
//     item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'},
//     user: {fontSize: '14px'},
//     content: {fontSize: '12px'}
// }

// 对样式的第三层封装（引入外部js文件）
import style from '@/components/style'

export default function CmtItem(props) {
    return <div style={style.item}>
                <h1 style={style.user}>评论人：{props.user}</h1>
                <p style={style.content}>评论内容： {props.content}</p>
            </div>
}