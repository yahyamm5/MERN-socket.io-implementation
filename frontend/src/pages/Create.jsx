import { Box, Button, TextField, Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import {UserAPIStore} from '../api/UsersApi.js'

const Create = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [age,setAge] = useState();

  const { signup } = UserAPIStore();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(username,password,age);
    } catch (error) {
      console.log("error",error)
    }
  }

  return (
      <div>
      <Navbar></Navbar>
      <Box sx={{marginTop:10}} >
      <form onSubmit={handleSignup} >
        <Typography sx={{marginLeft:105.5, marginBottom:4, color:"white"}} variant='h5' >Create user</Typography>
        <TextField sx={{marginTop:0, marginLeft:100, bgcolor:"white", borderRadius:2}} 
        id='filled-basic'
        label="username" 
        variant='filled'
        type='text'
        onChange={(e) => setUsername(e.target.value)}/>
        <TextField sx={{marginTop:10, marginLeft:-27.5, bgcolor:"white", borderRadius:2}} 
        id='filled-basic'
        label="password" 
        variant='filled'
        type='text'
        onChange={(e) => setPassword(e.target.value)}/>        
        <TextField sx={{marginTop:20, marginLeft:-27.5, bgcolor:"white", borderRadius:2}} 
        id='filled-basic'
        label="age" 
        variant='filled'
        type='number'
        onChange={(e) => setAge(e.target.value)}/>
        <Button type='submit' sx={{bgcolor:"white", color:"black", marginTop:30, marginLeft:-20.5, width:"100px"}} >Create</Button>
      </form>
      </Box>
      </div>    
  )

}
export default Create
