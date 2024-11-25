import {useState} from 'react';
function StateExample(){
    const [user,setUser]=useState('React')
    const changeName=()=>{
        setUser("js")

    }
    return(
        <>
        <h1>{user}</h1>
        <button onClick={changeName}>ChangeName</button>
        </>
    )
}
export default StateExample 