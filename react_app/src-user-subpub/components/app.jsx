import React, { Component } from 'react'

import Main from './main'
import Search from './search'

export default class App extends Component {

    render() {
        const {searchName} = this.state
        return (
            <div>
                <div className="container">
                    <Search/>
                    <Main/>
                </div>
            </div>
        )
    }
}