import {combineReducers} from 'redux'
import {ADD_COMMENT, DELETE_COMMENT, RECEIVR_COMMENTS} from './action-types'

// const initComments = [
//     {username: 'Tom', content: 'React挺好的！'},
//     {username: 'Jack', content: 'React太难了！'}
// ]

export function counter(state = 0, action) {
    switch(action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}

const initComments = []
export function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment, index) => index !== action.data)
        case RECEIVR_COMMENTS:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    counter,
    comments
})