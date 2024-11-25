import React from 'react';
class Lifecycle2 extends React.Component {
    constructor(){
        super();
        this.state={value:"Welcome to",name:"Frontend"}
    }
    componentWillMount(){
        alert("Learn reactjs lifecycle")
    }
    changevalue=()=>{
        this.setState({name:"Learn reactjs event"})
    }
    componentDidMount(){
    {
        setTimeout(()=>{
            this.setState({name:"Reactjs"})},5000)
        }
    }
    componentWillUpdate(){
        alert("Will updated are you sure");
    }
    componentDidUpadte(){
        document.getElementById('element').innerHTML="New value updated successfully"+''+this.state.name;
    }
    shouldComponentUpdate(){
        return true;
    }
    componentWillUnmount(){
        alert("Header deletd");
    }
    deleteheader=()=>{
        this.setState({value:false,name:false})
    }
    render(){
        return (
            <div>
                <h1>Reactjs componet's lifecycle</h1>
                <h2>{this.state.value}{this.state.name}</h2>
                <h2 id="element"></h2>
                <br/>
                <button type="button" onClick={this.changevalue}>Clickhere</button>
                <button type="button" onClick={this.deleteheader}>deletehere</button>
                </div>
        )
    }


}
export default Lifecycle2