import { Box, Button, Card, CardActions } from "@mui/material"
import Navbar from "../components/Navbar"

const HomePage = () => {
  return (
    <Box>
        <Navbar/>
        <Card sx={{maxWidth: 300, marginTop: 5, marginLeft: 5, bgcolor: "white", color:"black"}}>
          <CardActions sx={{marginLeft: 13}}>
            <Button sx={{color:"black", fontSize:20}} href="http://localhost:5173/Create" >Create</Button>
          </CardActions>
        </Card>
        <Card sx={{maxWidth: 300, marginTop: 5, marginLeft: 5, bgcolor: "white", color:"black"}}>
          <CardActions sx={{marginLeft: 13}}>
            <Button sx={{color:"black", fontSize:20}} href="http://localhost:5173/chat_page" >Chat</Button>
          </CardActions>
        </Card>
    </Box>
  )
}

export default HomePage
