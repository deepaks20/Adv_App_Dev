// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { AiFillFacebook } from 'react-icons/ai';
// import { CiBoxList } from "react-icons/ci";
// import { FaInstagram, FaSearch } from 'react-icons/fa';
// import { MdAttachEmail } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import '../css/Home.css';

// const Order = () => {
//   return (
//     <div>
//       <div className="wrapper">
//         <div className="banner">
//           <div className="navbar">
//             <a href="#" className="logo">
//               <img
//                 className="logo-image"
//                 src='https://pbs.twimg.com/profile_images/1217561906728357889/GN4SlxtY_400x400.jpg'
//                 alt="Logo"
//               />
//             </a>
//             <div className="search-bar-container">
//               <input type="text" placeholder="Search Gifts" className="search-bar" />
//               <i className="search-icon">
//                 <FaSearch size="1rem" color="black" />
//               </i>
//             </div>
//             <ul>
//               <li><a href="#"> Home</a></li>
//               <li><Link to="/Personalised"><a href="#">Personalised</a></Link></li>
//               <li><Link to="/Occasion"><a href="#">Occasions</a></Link></li>
//               <li><Link to="/Recipient"><a href="#">Recipients</a></Link></li>
//               <li><Link to="/Category"><a href="#">Categories</a></Link></li>
//               <li>
//                 <a href="#">
//                   <Dropdown>
//                     <Dropdown.Toggle variant="success" id="dropdown-basic">
//                       <CiBoxList />
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Link to="/Profile">
//                         <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
//                       </Link>
//                       <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
//                       <Link to="/Feed">
//                         <Dropdown.Item href="#/action-3">Feedback</Dropdown.Item>
//                       </Link>
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="content">
//         <div className="login-container">
//         <h2>Login</h2>
//         <form className="login-form" onSubmit={handleSubmit}>
//           <label className="form-label">
//             Gmail:
//             <input
//               type="gmail"
//               name="gmail"
//               value={formData.gmail}
//               onChange={handleChange}
//               required
//               className="form-input"
//             />
//           </label>
//           <br />
//           <label className="form-label">
//             Password:
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="form-input"
//             />
//           </label>
//           <br />
//           <button type="submit" className="submit-button">
//             Login
//           </button>
//           <p style={{color:"red"}}>{errorMessage}</p>
//         </form>
//           </div>
//         </div>
//       </div>
//       <div className="footer">
//         <div className="footer-links">
//           <Link to="/about">About us</Link>
//           <Link to="/help-center">Help Center</Link>
//           <Link to="/report-issue">Report Issue</Link>
//           <Link to="/privacy-policy">Privacy Policy</Link>
//           <Link to="/terms-conditions">Terms & Conditions</Link>
//           <Link to="https://www.facebook.com/giftgallery.info">
//             <AiFillFacebook size="2rem" />
//           </Link>
//           <Link to="https://www.instagram.com/">
//             <FaInstagram size="2rem" />
//           </Link>
//           <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
//             <MdAttachEmail size="2rem" />
//           </Link>   
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;
import  { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { AiFillFacebook } from 'react-icons/ai';
import { CiBoxList } from "react-icons/ci";
import { FaInstagram, FaSearch } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Order = () => {
  const [formData, setFormData] = useState({
    gmail: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    if (formData.gmail === 'example@gmail.com' && formData.password === 'password') {
      // Successful login
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="banner">
          <div className="navbar">
            <a href="#" className="logo">
              <img
                className="logo-image"
                src='https://pbs.twimg.com/profile_images/1217561906728357889/GN4SlxtY_400x400.jpg'
                alt="Logo"
              />
            </a>
            <div className="search-bar-container">
              <input type="text" placeholder="Search Gifts" className="search-bar" />
              <i className="search-icon">
                <FaSearch size="1rem" color="black" />
              </i>
            </div>
            <ul>
              <li><a href="#"> Home</a></li>
              <li><Link to="/Personalised"><a href="#">Personalised</a></Link></li>
              <li><Link to="/Occasion"><a href="#">Occasions</a></Link></li>
              <li><Link to="/Recipient"><a href="#">Recipients</a></Link></li>
              <li><Link to="/Category"><a href="#">Categories</a></Link></li>
              <li>
                <a href="#">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <CiBoxList />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Link to="/Profile">
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      </Link>
                      <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
                      <Link to="/Feed">
                        <Dropdown.Item href="#/action-3">Feedback</Dropdown.Item>
                      </Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="login-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <label className="form-label">
                Gmail:
                <input
                  type="email" // Change type to "email"
                  name="gmail"
                  value={formData.gmail}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <label className="form-label">
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <br />
              <button type="submit" className="submit-button">
                Login
              </button>
              <p style={{ color: "red" }}>{errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-links">
          <Link to="/about">About us</Link>
          <Link to="/help-center">Help Center</Link>
          <Link to="/report-issue">Report Issue</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <Link to="https://www.facebook.com/giftgallery.info">
            <AiFillFacebook size="2rem" />
          </Link>
          <Link to="https://www.instagram.com/">
            <FaInstagram size="2rem" />
          </Link>
          <Link to="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
            <MdAttachEmail size="2rem" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
