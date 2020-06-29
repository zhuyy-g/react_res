import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {counter} from './reducers'

// 生成一个store对象
const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)))

export default store