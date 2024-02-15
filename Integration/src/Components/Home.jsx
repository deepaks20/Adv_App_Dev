// import React from 'react';
import '../css/Home.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { CiBoxList } from "react-icons/ci";
import { MdAttachEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import {gift} from '../assets/gift.jpg';
// import Navbar from './Navbar';


const Home = () => {
  return (
    <div className="wrapper">
    

       <div className="banner">
      
        <div className="navbar">
          <a href="#" className="logo">
  
            <img
              className="logo-image"
              src='https://pbs.twimg.com/profile_images/1217561906728357889/GN4SlxtY_400x400.jpg '
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
            <li><a href="#"> Home</a>
    </li>
            <li><Link to="/Personalised"><a href="#">Personalised</a></Link></li>
            <li><Link to="/Occasion"><a href="#">Occasions</a></Link></li>
            <li><Link to="/Recipient"><a href="#">Recipients</a></Link></li>
            <li><Link to="/Category"><a href="#">Categories</a></Link></li>
            <li><a href="#"><Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <CiBoxList />
      </Dropdown.Toggle>

      <Dropdown.Menu>
      <Link to="/Profile"> <Dropdown.Item href="#/action-1">Profile</Dropdown.Item></Link>
       {/* <Link to="/Login"><Dropdown.Item href="#/action-2">LogOut</Dropdown.Item></Link> */}
        <Link to="/Feed"><Dropdown.Item href="#/action-3">Feedback</Dropdown.Item></Link>
        <Link to="/Login"><Dropdown.Item href="#/action-2">LogOut</Dropdown.Item></Link>
      </Dropdown.Menu>  
    </Dropdown></a></li>
          </ul>
        </div>
         </div> 
        <div className="content">
        <div className="right-container">
        <h2 className="rc-title"></h2>
          <p className="rc-content">Welcome to our Gift Shopping App, where the joy of giving meets the convenience of seamless online shopping. Elevate your gift-giving experience with our user-friendly application designed to make finding the perfect present a delightful journey.<br/>Explore a curated selection of unique and thoughtful gifts for every occasion. From personalized items.</p>
        </div>
        
           {/* <h1 className="head1">Select your Gift Theme</h1> 
          <p className=>Gifts made with love and passion. <br /> </p>
          
       <div className="card-container">
      <Card style={{ width: '18rem' }}> 
      <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=6f5127fe64ffeaa31acb83f2bc7ee3345ae39ddf-10414372-images-thumbs&n=13" width="100vh" />
      <Card.Body>
        <Card.Title>Personalised HandCraft</Card.Title>
        <Card.Text>
        Order your personalized lamp today and let your memories shine.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Customizable Design</ListGroup.Item>
        <ListGroup.Item>Adjustable Lighting</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
       <Link to='/Product1'> <Card.Link href="#">Card Link</Card.Link></Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      
    </Card>  </div>
    <div className='card-container2'>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://barbourdesign.com/wp-content/uploads/2016/04/lobulo-13-1.jpg" width="100vh" />
      <Card.Body>
        <Card.Title>Paper Craft</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card></div>
     */}
    {/* <img  src={gift}></img> */}
    <div className="Font-text" >
    <h2 className="title">
    <span className="title-word title-word-1">Express</span>
    <span className="title-word title-word-2">Your </span>
    <span className="title-word title-word-3">Love&nbsp;</span>
    <span className="title-word title-word-4">Today</span>
  </h2>
  </div>
        
        </div>
      
      <div className="footer">
      
        <div className="footer-links">

          <Link to="/About">About us</Link>
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

export default Home;
 {/* <button type="button"><span></span>WATCH MORE</button>
            <button type="button"><span></span>SUBSCRIBE</button> */}
