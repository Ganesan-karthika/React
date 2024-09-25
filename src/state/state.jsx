// import React from "react";
// class ReactState extends React.Component{
//     constructor(){
//         super();
//         this.state={initialValue:"Welcome",name:"guys"}
//     } 
//     changevalue = () =>
//     {
//         this.setState({initialValue:"Thanks for coming"});
//     }
//     render(){
//         return <div>
//             <h1>{this.state.initialValue}<span> </span>{this.state.name}</h1>
//             <br/>
//             <button type="button" onClick={this.changevalue}>Exit</button>
//         </div>
//     }
// }
// export default ReactState
import React from "react";
class ReactState extends React.Component{
    constructor(){
        super();
        this.state={initialValue:0}
        
        
    } 
    changevalue = () =>
    {
        this.setState({initialValue:this.state.initialValue+1});
    }
    changevalue1 = () =>
    {
            this.setState({initialValue:this.state.initialValue-1});
    }
    changevalue2=()=>
    {
        this.setState({initialValue:0});
    }
    
    render(){
        return < div class="div">
            <h1>{this.state.initialValue}</h1>
            <br/>
    
            <button type="button" onClick={this.changevalue}>Increment</button>
            <button type="button" onClick={this.changevalue1}>Decrement</button>
            <button type="button" onClick={this.changevalue2}>start</button>

            

        </div>
    }
}
export default ReactState