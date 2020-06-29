import React, {Component} from 'react'

export default class News extends Component {
    state = {
        newArr: [
            'news001',
            'news002',
            'news003'
        ]
    }

    render() {
        const {newArr} = this.state
        return (
            <ul>
                {
                    newArr.map((item, index) => <li key={index}>{item}</li>)
                } 
            </ul>
        )
    }
}