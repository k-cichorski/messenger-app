import React, {useEffect} from 'react';
import './css/App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {useStateValue} from "./store/StateProvider";
import {NEW_MESSAGE} from "./store/reducer";

function App() {
    const [, dispatch] = useStateValue();

    useEffect(() => {
        const simulateMessage = (message, timeout) => {
            return setTimeout(() => {
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
        const msg1 = simulateMessage('Hey!', 1000);
        const msg2 = simulateMessage('Hope You like how my Messenger looks!', 3000);
        const msg3 = simulateMessage('More functionality coming soon! Stay tuned! :)', 5000);
        return () => {
            clearTimeout(msg1);
            clearTimeout(msg2);
            clearTimeout(msg3);
        }
    }, [dispatch]);

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
