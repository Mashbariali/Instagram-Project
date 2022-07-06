import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile'
import './App.css';
import './components/style.css'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const steps = [
  {
    id: '0',
    message: 'Hey There!',

    trigger: '1',
  }, {
    id: '1',

    // This message appears in
    // the bot chat bubble
    message: 'Please write your username',
    trigger: '2'
  }, {
    id: '2',

    // Here we want the user
    // to enter input
    user: true,
    trigger: '3',
  }, {
    id: '3',
    message: " hi {previousValue}, how can I help you?",
    trigger: 4
  }, {
    id: '4',
    options: [

      // When we need to show a number of
      // options to choose we create alist
      // like this
      { value: 1, label: 'View posts' },
      { value: 2, label: 'View profile' },

    ],
    end: true
  }
];

// Creating our own theme
const theme = {
  background: 'white',
  headerBgColor: '#f23d27',
  headerFontSize: '20px',
  botBubbleColor: '#f23d27',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "https://cdn3.vectorstock.com/i/1000x1000/31/67/robot-icon-bot-sign-design-chatbot-symbol-vector-27973167.jpg",
  floating: true,
};
function App() {
  
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
        
          <Route path="/"></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path="/Profile" element={<Profile/> }></Route>
          <Route path="/Login" element={<Login/> }></Route>
        
        </Routes>
      </Router>
      <ThemeProvider theme={theme}>
        <ChatBot

          // This appears as the header
          // text for the chat bot
          headerTitle="Instgram Bot"
          steps={steps}
          {...config}

        />
      </ThemeProvider>
    </div>
  );
}

export default App;
