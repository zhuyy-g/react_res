import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../components/my-nav-link'

import Message from './message'
import News from './news'


export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>home route component</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/* 这是react中路由跳转的方法 */}
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        {/* 这是react中路由组件占位的方法 */}
                        <Switch>
                            <Route path='/home/news' component={News}/>
                            <Route path='/home/message' component={Message}/>
                            {/* 这是react中路由重定向的方法 */}
                            <Redirect to="/home/news"/>   
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}