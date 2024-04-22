import React, { useEffect, useRef, useState } from "react";
import Client from '../components/Client';
import CodeEditor from '../components/CodeEditor';
// import { initSocket } from "../socket";
// import ACTIONS from "../action";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const EditorPage = ({ username, roomId }) => {
    const navigate = useNavigate();
    // const socketRef = useRef(null);
    // const location = useLocation();
    // useEffect(() => {
    //     const init = async () => {
    //         socketRef.current = await initSocket();
    //         socketRef.current.emit(ACTIONS.JOIN, {
    //             // roomId,
    //             username: location.state?.username,
    //         });
    //     };
    //     init();
    // },[]);

    const [clients, setClients] = useState([
        { socketId: 1, username: "vini" },
        { socketId: 2, username: "Baba" },




    ]);
    function handleCopyClick() {
        navigator.clipboard.writeText(roomId);
        toast.success('Room ID copied successfully', {
            duration: 3000,
            position: 'top-right',
        });
    }
    function handleLeaveClick() {
        const confirmleave = confirm("Do you want to leave  ?")
        if (confirmleave ) {
            navigate('/')

        }
    }


    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img className="logoImage" src="/logo-removebg.png" alt="logo" />
                    </div>
                    <h3> Connected</h3>
                    <div className="clientsLists">
                        {
                            clients.map((client) => (
                                <Client
                                    key={client.socketId}
                                    username={client.username}
                                />
                            ))}


                    </div>
                </div>
                <button onClick={handleCopyClick} className="btn copyBtn">    Copy Room id </button>
                <button onClick={handleLeaveClick} className="btn leaveBtn"> Leave </button>

            </div>
            <div className="editorWrap">
                <CodeEditor roomId={roomId} />
            </div>
        </div>
    );
};

export default EditorPage;
