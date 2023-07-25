import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./Signup.css"
function Signup() {
const[name,setName]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')

console.log(name,email,password)

const handleName=(e)=>{
    setName(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handlePassword=(e)=>{
    setPassword(e.target.value)
}

const handleApi = (e) => {
    console.log("hcbkjfnbk")
    e.preventDefault()

    axios.post("http://localhost:4000/api/formcreate", {
      // firstname: firstname,
      // lastname: lastname,
      name,
      email,
      password
    })
      .then(result => {
        console.log(result)
        console.log("registerd successfull")
      })
      .catch(error => {
        console.log(error)
        console.log("invalid information")
      })
  }

  const handlechange = (e) => {
    e.preventDefault()
  }


  return (
    <>
    <form onSubmit={handlechange}>
    <h1>Signup</h1>


Name:<input value={name}
          onChange={handleName}
          type="name" /> <br></br>


        Email:<input value={email}
          onChange={handleEmail}
          type="email" /> <br></br>


        Password:<input value={password}
          onChange={handlePassword}
          type='password' /> <br></br>



        <button onClick={handleApi}><Link to="/login"><button>Register</button></Link></button><br></br> 
    </form>
    
    </>



  )
}

export default Signup