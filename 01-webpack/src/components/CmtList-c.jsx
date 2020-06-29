import React from 'react'
import CmtItem from '@/components/CmtItem-c'

// 导入列表组件需要的样式表  直接导入样式表 默认是在全局 对整个项目生效的
// 思考 Vue组件中的样式表 有没有冲突的问题
// 答 有冲突的问题 可以使用<style scoped></style>
import cssObj from '@/css/cmtlist.scss'

// 如果 在引用某个包的时候 这个包被安装到了node_modules目录中（这种情况可以直接映入自己的模块 样式表）
// 自己规定 第三方样式表 以.css结尾  自己的样式表 以.scss 或.sass结尾
import bootcss from 'bootstrap/dist/css/bootstrap.css'

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
                    {/* 对类名进行global包装之后就可以用如下方法进行使用了 */}
                    <h1 className={[cssObj.title,'test'].join(' ')}>这是评论列表组件</h1>
                    {/* <button className={[bootcss.btn,bootcss['btn-primary']].join(' ')}>按钮</button> */}
                    <button className="btn btn-primary">按钮</button>
                    {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem> )}
               </div>
    }
}