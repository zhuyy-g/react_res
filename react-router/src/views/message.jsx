import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        // 模拟ajax发送异步请求
        setTimeout(() => {
            const messages = [
                { id: 1, title: 'message001' },
                { id: 3, title: 'message003' },
                { id: 5, title: 'message005' },
                { id: 6, title: 'message006' }
            ]
            this.setState({ messages })
        }, 100)
    }

    render() {
        const { messages } = this.state
        return (
            <div>
                <ul>
                    {
                        messages.map((message, index) => (
                            <li key={index}>
                                <a href={`/home/message/messageDetail/${message.id}`}>{message.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <Route path='/home/message/messageDetail/:id' component={MessageDetail}/>
            </div>

        )
    }
}