import React from 'react'
import CmtItem from '@/components/CmtItem'

export default class CmtList extends React.Component {
    constructor() {
        super()
        this.state = {
            CommentList: [
                { id: 1, user: '张三', content: '哈哈 沙发' },
                { id: 1, user: '张三', content: '哈哈 板凳' },
                { id: 1, user: '张三', content: '哈哈 凉席' },
                { id: 1, user: '张三', content: '哈哈 砖头' },
                { id: 1, user: '张三', content: '哈哈 楼下山炮' }
            ]
        }
    }
    render() {
        return <div>
                    {/* 以下展示jsx当中写行内样式的写法 */}
                    <h1 style={{color: 'red',fontSize: '35px'}}>这是评论列表组件</h1>
                    {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem> )}
               </div>
    }
}