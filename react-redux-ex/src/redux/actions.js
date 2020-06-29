// 包含了所有的action creater(action的工厂函数)
import {ADD_COMMENT, DELETE_COMMENT, RECEIVR_COMMENTS} from './action-types'

// 同步增加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

// 同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

// 同步接收comments
const receiveComments = (comments) => ({type: RECEIVR_COMMENTS, data: comments})

// 异步从后台获取数据
export const getComments = () => {
    return dispatch => {
        // 模拟发送ajax请求异步获取数据
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React挺好的！'},
                {username: 'Jack', content: 'React太难了！'}
            ]
            // 分发一个同步action
            dispatch(receiveComments(comments))
        }, 1000)
    }
}