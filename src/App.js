import React from 'react';

import { Widget, addResponseMessage, setQuickButtons } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import './App.css'

// import avatar from './support.svg'

function App() {
  // setQuickButtons([ { label: 'Работа с '+window.document.title, value: window.document.title } ]);
  let handleNewUserMessage = (e) => {
    console.log(e)
    fetch(`https://3c41dbf4.ngrok.io/api/message?text=${e}`)
    .then(response => response.json())
    .then(data => {
      addResponseMessage(data.answer)
    })
  }
  (() => {
    setInterval(() => {
      setQuickButtons([ { label: "Вопрос с " + window.document.title, value: window.document.title } ]);
    }, 500);
  })()
  return (
    <div className="App" style={{
      fontFamily: "sans-serif"
    }}>
      <Widget 
        profileAvatar={'https://image.flaticon.com/icons/svg/1067/1067617.svg'}
        titleAvatar={'https://image.flaticon.com/icons/svg/1067/1067617.svg'}
        title="Привет!"
        subtitle="Задайте, пожалуйста вопрос"
        handleQuickButtonClicked={handleNewUserMessage}
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default App;
