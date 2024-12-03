// import React from "react";
import { BrowserRouter  } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup/LoginSignup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <LoginSignup/>
      </BrowserRouter>
    </div>
  );
}

export default App;
