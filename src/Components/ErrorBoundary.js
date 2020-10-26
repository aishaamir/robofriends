import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    state={
        hasError: false
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    render() {
        if(this.state.hasError){
            return <h1>OOOOPS</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
