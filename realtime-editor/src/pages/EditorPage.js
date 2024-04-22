import React, { useEffect, useRef, useState } from "react";
import Client from '../components/Client';
import CodeEditor from '../components/CodeEditor';
// import { initSocket } from "../socket";
// import ACTIONS from "../action";
import { useLocation } from "react-router-dom";


const EditorPage = ({username, roomId}) => {
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

    const [clients, setClients ] = useState([
        { socketId: 1, username: "vini" },
        { socketId: 2, username: "Baba"},
     



    ]);

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
                <button className="btn copyBtn">    Copy Room id </button>
                <button className="btn leaveBtn"> Leave </button>

            </div>
            <div className="editorWrap">
                <CodeEditor roomId={roomId} />
                 </div>
        </div>
    );
};

export default EditorPage;
