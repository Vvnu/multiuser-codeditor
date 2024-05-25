import { io } from 'socket.io-client';
import config from './config.js'
const serverURL = config.serverURL;
// const serverURL = 'http://localhost:5000';

export const socket = io(serverURL);

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transport: ['websocket'],
    };
    return io(process.env.REACT_APP_BACKEND_URL, options);
};
