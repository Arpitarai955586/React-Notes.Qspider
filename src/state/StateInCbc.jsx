import { Component } from "react";
class StateInCbc extends Component{
    state= { text : "hiii"}
    updateState=()=>{
        console.log("btn clicked")
        this.setState({text:"byeee"})
    }
    render(){
        console.log(this);
        return(
            <div>
                <h1>state In Based comp</h1>
                <h2>{this.state.text}</h2>
                <button onClick={this.updateState}>change</button>

            </div>
        )
    }
}
export default StateInCbc;