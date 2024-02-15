
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import Anniversary from './Components/Anniversary';
import Birthday from './Components/Birthday';
import Category from './Components/Category';
import ChrismasGift from './Components/ChrismasGift';
import Cover from './Components/Cover';
import Engagement from './Components/Engagement';
import Entry from './Components/Entry';
import Feed from './Components/Feed';
import Giftformen from './Components/Giftformen';
import Home from './Components/Home';
import Login from './Components/Login';
import Order from './Components/Order';
import Personalised from './Components/Personalised';
import Post from './Components/Post';
import Product1 from './Components/Product1';
import Profile from './Components/Profile';
import Recipient from './Components/Recipient';
import Signup from './Components/Signup';
import Valentine from './Components/Valentine';
import About from './Components/About';
// import Valentine form './Components/Valentine';

// import Navbar from './Components/Navbar';
// import Slider from './Components/Slider';
import Occasion from './Components/Occasion';
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
      <Route path="/Personalised" element={<Personalised/>}/>
      <Route path="/Product1"  element={<Product1/>}/>
      <Route path="/Entry" element={<Entry/>}/>
      <Route path="/Category" element={<Category/>}/>
      <Route path="/Birthday" element={<Birthday/>}/>
      <Route path="/Anniversary" element={<Anniversary/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/Post" element={<Post/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Valentine" element={<Valentine/>}/>
      <Route path="/ChrismasGift" element={<ChrismasGift/>}/>
      <Route path="/Recipient" element={<Recipient/>}/>
      <Route path="/Feed" element={<Feed/>}/>
      <Route path="/Cover" element={<Cover/>}/>
      <Route path="/Engagement" element={<Engagement/>}/>
      <Route path="/Giftformen" element={<Giftformen/>}/>
      <Route path="/About" element={<About/>}/>
      {/* <Route path="/Slider" element={<Slider/>}/> */}
      <Route path="/Occasion" element={<Occasion/>}/>
      <Route path="/Order" element={<Order/>}/>
      {/* <Route path="/Navbar" element={<Navbar/>}/>  */}
     
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
