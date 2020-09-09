import React, {useEffect} from 'react';
import './css/App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {useStateValue} from "./store/StateProvider";
import {NEW_MESSAGE} from "./store/reducer";

function App() {
    const [, dispatch] = useStateValue();

    const simulateMessage = (message, timeout) => {
        setTimeout(() => {
            let action = {
                type: NEW_MESSAGE,
                message: {
                    username: 'Kuba Cichorski',
                    message: message,
                    date: new Date().toUTCString()
                }
            }
            dispatch(action);
        }, timeout);
    }

    useEffect(() => {
        simulateMessage('Hey!', 3000);
        simulateMessage('Hope You like how my Messenger looks!', 6000);
        simulateMessage('More functionality coming soon! Stay tuned! :)', 9000);
    }, []);

  return (
    <div className="app">
        <div className="app__container">
            <Sidebar/>
            <Chat />
        </div>
    </div>
  );
}

export default App;
