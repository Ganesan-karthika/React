function ListsPoints1(props)
{
 const myvalue  = props.myvalue;
 const rl = myvalue.map((listvalues) =>{
    console.log("done")
    console.log(listvalues)
    return <li>{listvalues}</li>

 });

 return <div className="container">
     <ul>{rl}</ul>

 </div>} 

export default ListsPoints1

// do this in app.js
// const myvalue = [2,4,5,6]
