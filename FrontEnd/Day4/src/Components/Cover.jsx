import '../css/Cover.css';
import { Link } from 'react-router-dom';

const Cover = () => {
  return (
    <div className="banner-area">
      <header>
        <div className="menu">
          <ul>
            {/* <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li>
            <li><a href="#"></a></li> */}
          </ul>
        </div>
      </header>
      <div className="banner-text">
        <h1 className='vf'>Giftster</h1>
        <p>Welcome to GiftJoy, the premier gift app designed to elevate your gifting experience. Whether it's a special occasion or just to brighten someone's day, GiftJoy makes finding the perfect gift a breeze.</p>
        <Link to="/Admin"><button className="banner-button1">Admin</button></Link>
<Link to="/Login"><button className="banner-button2">User</button></Link>

      </div>
    </div>
  );
};

export default Cover;