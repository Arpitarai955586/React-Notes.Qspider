import { Component } from "react";

export default class LifeCycle extends Component{
    state={value:0}
    componentDidMount(){
        console.log("component Mounted")
    }
    componentDidUpdate(){
        console.log("component Update")
    }
    componentWillUnmount(){
        console.log("component Unmounted")
    }
    increment=()=>this.setState({value:this.state.value + 1})
    render(){
        return(
            <div>
                <h1>Learn LifeCycle method :{this.state.value}</h1>
                <button onClick={this.increment}> increment</button>
            </div>
        )
    }
    
}
