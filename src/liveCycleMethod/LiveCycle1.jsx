import React, { Component } from 'react'

export default class LiveCycle1  extends Component{
    state= {value:0}
    componentDidMount(){
        console.log("computer mounted")
    }
    componentWillUnmount(){
        console.log("computer Unmounted")
    }
    componentDidUpdate(){
        console.log("computer update")
    }
    increase=()=>this.setState({value:this.state.value+1})
    render(){
        return(
            <div>
                <h1>Live cycle method :{this.state.value}</h1>
                <button onClick={this.increase}>increase</button>
            </div>
        )
    }

  
}

