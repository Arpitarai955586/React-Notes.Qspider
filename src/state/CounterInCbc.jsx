import { Component } from "react";

class CounterInCbc extends Component{
    state={count:0};
    Increament=()=>{
        console.log("btn clicked")
        this.setState({count:this.state.count+1})
        this.setState({count:this.state.count+1})
        this.setState({count:this.state.count+1})
    }
    decreament=()=>{
        console.log("btn clicked")
        this.setState({count:this.state.count-1})
    }
    
    render(){
        return(
            <div>
                <h1>Counter In class based Comp : </h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.Increament}>increment</button>
                <button onClick={this.decreament}>increment</button>
            </div>
        )
    }
}
export default CounterInCbc;