import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import io from 'socket.io-client'
import { Box } from "@mui/material"
import {UserAPIStore} from '../api/UsersApi.js'
const socket = io.connect("http://localhost:3001")

const Chat_Page = () => {

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [messageReceived, setMessageReceived] = useState("");
    const { send_message } = UserAPIStore();
    
    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            await send_message(message, name);
            socket.emit("send_message", {message: message});
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageReceived(data.message);
        });
    }, [socket]);
    
    return (
    <div>
        <Navbar></Navbar>
        <Box sx={{marginLeft:5, color:"white"}}>
            <h1>message:{messageReceived}</h1>
        </Box>      
        <Box sx={{marginTop: 90, marginLeft: 5}} >
            <input
            style={{fontSize:20}}
             type="text"
             placeholder="sender name" 
             onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
            style={{fontSize:20}}
             type="text"
             placeholder="send a message" 
             onChange={(e) => setMessage(e.target.value)}
            />
            <br/>
            <button style={{fontSize:20}} onClick={sendMessage}  >Send</button>
        </Box>
    </div>
  )
}

export default Chat_Page
