import React, { Component } from 'react'
import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {
    // 以下展示在拥有脚手架的情况下给组件对象指定state属性的方法
    state = {
        comments: [
            {username: 'Tom', content: 'React挺好的！！！'},
            {username: 'Jack', content: 'React太难了！！！'}
        ]
    }

    // 添加评论事件
    addComment = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)
        this.setState({comments})
    }

    // 删除指定评论
    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({comments})
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} deleteComment={this.deleteComment}/>
                    </div>
                </div>
            </div>
        )
    }
}