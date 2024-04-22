import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";


import './App.css';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { useState } from "react";


function App() {

  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  return (
       <>
       <div>

       {/* <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}> */}
      {/* <CodeEditor /> */}
    {/* </Box> */}

        <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
        ></Toaster>
       </div> 
        <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home roomId={roomId} setRoomId={setRoomId} username={username} setUsername={setUsername}/>}></Route>
          <Route path ="/editor/:roomId" element={<EditorPage username={username} roomId={roomId}/>}></Route>
        </Routes>
        
        </BrowserRouter> 
       
       </>


  );
}

export default App;








