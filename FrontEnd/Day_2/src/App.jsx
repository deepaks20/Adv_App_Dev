// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//import Hii from './assets/Hii'
import Signup from './Components/Signup'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home'
import Login from './Components/Login'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup"  element={<Signup/>}/>
      <Route path="/Home" element={<Home/>}/>
     
      </Routes>
      </div>
      
      
    </Router>
      /* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
    
    

  );
};

export default App
