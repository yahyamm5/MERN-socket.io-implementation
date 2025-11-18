import { Route, Routes } from "react-router-dom"
import Create from "./pages/Create"
import Chat_Page from "./pages/Chat_Page"
import HomePage from "./pages/HomePage"

function App() {


  return (
      <Routes >
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/chat_page" element={<Chat_Page/>} />
      </Routes>
  )
}

export default App
