import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    handleIncrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleIncrementCount}>count { this.state.count } </button>
            </div>
        )
    }
}

export default ClassComponent
