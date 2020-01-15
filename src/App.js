import React from 'react';
import './App.css';
 
 
 

function App() {
  return ( 
    <div className="App">
    <ul>
                {socialMediaList.map(s => (<li>{s}</li>))}
            </ul>
    </div>
  );
}

export default App;
