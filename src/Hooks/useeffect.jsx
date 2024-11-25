import React, { useState ,useEffect} from 'react'

const sampleData = [
    {name : "karthi",age :20,location: 'chennai'},
    {name : "jothi",age :21,location: 'chennai'}
]
 function Table1(){
    const [data,setData] = useState([]);
    useEffect(() => {
       console.log("done");
        setTimeout(() => {
            setData(sampleData);
        }, 3000);
    });
    return (
        <table>
           <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                </tr>
                {data.length === 0 && <td>Loading....</td>}
            {data.map((dat) => (
                // console.log(dat.name);
                <tr>
                  
                <td>{dat.name}</td>
                    <td>{dat.age}</td>
                    <td>{dat.location}</td>
                </tr>
                    
                
            ))}
        </table>
    );
}

export default Table1;

// function Checking(){
//     // console.log("Componenet Started step1");
    
//     const[data,setdata] = useState('welcome')
//     // useEffect(() => {alert("your life")})
//     useEffect(() => setTimeout(() => {
//         alert("welcome");
//     },3000),[])
    
//     const changeName = () =>{
//         console.log("done");
//         setdata('JS')
//         console.log(data)
//         // user = "Angular"
//     }
//     return <div>
//         <h1>{data}</h1>
//         <button onClick = {changeName}>ChangeName</button>
//         {/* {console.log("no")}
//         {console.log("no2")} */}
//     </div>
// }


// function StateExample2(){
//     const [user,setUser] = useState('React')
//     const [data,setData] = useState('Django')
//         // useEffect(() => {alert("your life")})
//         useEffect(() => {setTimeout(() => {
//           console.log("hello")
//         },3000)},[user,data])

//     const changeName = () =>{
//         // console.log("done");
//         setUser('JS')
//         // user = "Angular"
//     }
//     const updateName = () =>{
//         // console.log("done");
//         setData('Python')
//         // user = "Angular"
//     }
//     return(
//         <>
//         <h3>{user}</h3>
//         <h4>{data}</h4>
//         <button onClick = {changeName}>ChangeName</button>
//         <button onClick = {updateName}>UpdateName</button>
//         </>
//     )
// }

// //export default StateExample2;
