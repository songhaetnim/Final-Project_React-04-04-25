import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cat />
      </header>
    </div>
  );
}

const Cat = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 몸통 */}
      <circle cx="100" cy="150" r="50" fill="gray" />
      
      {/* 머리 */}
      <circle cx="100" cy="80" r="40" fill="gray" />
      
      {/* 눈 */}
      <circle cx="85" cy="70" r="5" fill="black" />
      <circle cx="115" cy="70" r="5" fill="black" />
      
      {/* 코 */}
      <polygon points="95,85 105,85 100,95" fill="pink" />
      
      {/* 입 */}
      <path d="M90,100 Q100,110 110,100" stroke="black" strokeWidth="2" fill="transparent" />
      
      {/* 귀 */}
      <polygon points="70,40 90,60 70,60" fill="gray" />
      <polygon points="130,40 110,60 130,60" fill="gray" />
    </svg>
  );
};

export default App;





// .App {   --보더
//     text-align: center;
//   }
  
//   .App-logo {
//     height: 40vmin;
//     pointer-events: none;
//   }
  
//   .App-header {
//     background-color: #282c34;
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: calc(10px + 2vmin);
//     color: white;
//   }
  
//   .App-link {
//     color: #61dafb;
//   }
  