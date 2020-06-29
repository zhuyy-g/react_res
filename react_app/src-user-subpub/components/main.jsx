import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component {

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount () {
        // 订阅消息
        PubSub.subscribe('search', (msg, searchName) => {
            this.setState({
                initView: false,
                loading: true
            })
            // 发送ajax请求
            const url = `https://github.com/search/users?q=${searchName}`
            axios.get(url)
                 .then(response => {
                    // 得到相应数据
                    const result = response.data
                    const users = result.items.map(item => {
                        return {name: item.login, url: item.html_url, avatarUrl: item.avatar_url}
                    })
                    // 接收数据成功 更新状态
                    this.setState({
                        loading: false,
                        users
                    })
                 })
                 .catch(error => {
                    //  失败 更新状态
                    this.setState({
                        loading: false,
                        errorMsg: error.errorMsg
                    })
                 })
        })
    }

    render() {
        const { initView, loading, users, errorMsg } = this.state
        const {searchName} = this.props
        if (initView) {
        return <h2>请输入关键词进行搜索{searchName}</h2>
        } else if (loading) {
            return <h2>正在请求中</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        }
        return (
            <div className="row">
                {
                    users.map((user, index) => (
                        <div className="card">
                            <a href={user.url} target="_blank">
                                <img src={user.avatarUrl} style={{ width: 100 }} />
                            </a>
                            <p className="card-text">{user.name}</p>
                        </div>
                    ))
                }

            </div>

        )
    }
}