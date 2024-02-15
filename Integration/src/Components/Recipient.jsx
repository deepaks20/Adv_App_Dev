import { BiSolidCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
import '../css/Category.css';
// import {fa-solid fa-house} from "react-icons";


const Category = () => {
  return (
    <div className="background-container">

    <div>
      {/* <nav className="navbar"> */}
      <h2 className="category-head" ><Link to="/Home"><BiSolidCategory /></Link>Recipients
</h2>
{/*
        <h2 className="navbar-item">Birthday Gifts <IoGiftSharp />
</h2>
        <h2 className="navbar-item">Occasions <FaGlassCheers />
</h2>
        <h2 className="navbar-item">Recipients <IoWomanSharp />
</h2>
        <h2 className="navbar-item">Anniversary Gifts  <IoGiftSharp /></h2>
        <h2 className="navbar-item">Personalised <GrPersonalComputer />
</h2> */}
      {/* </nav> */}
      {/* <h1 className="collections-title">Collections</h1> */}
      
      <div className="cards-list">
        {/* Add birthday cards here */}
      </div>

      <div className="cards-list">
        {/* Add anniversary gift cards here */}
      </div>

      <div className="cards-list">
        {/* Add occasion cards here */}
      </div>

      <div className="cards-list">
        <div className="card 1">
          <div className="card_image">
            <img src="https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393673.jpg?size=626&ext=jpg&ga=GA1.1.761425461.1706113794&semt=ais" alt="Card 1" />
          </div>
          <div className="card_title title-white">
          <Link to='/Giftformen'> <p>Gifts For Men</p></Link>
          </div>
        </div>

        <div className="card 2">
          <div className="card_image">
            <img src="https://img.freepik.com/free-photo/young-woman-holding-opened-present-red-background-high-quality-photo_114579-62436.jpg?size=626&ext=jpg&ga=GA1.1.761425461.1706113794&semt=ais" alt="Card 2" />
          </div>
          <div className="card_title title-white">
          <Link to="/Birthday"><p>Gifts For Women</p></Link>
          </div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src="https://img.freepik.com/free-photo/cheerful-woman-surprising-girlfriend_23-2147744523.jpg?size=626&ext=jpg&ga=GA1.1.761425461.1706113794&semt=ais" alt="Card 3" />
          </div>
          <div className="card_title">
          <Link to="/Valentine">  <p>Gifts For Mom</p></Link>
          </div>
        </div>

        <div className="card 4">
          <div className="card_image">
            <img src="https://img.freepik.com/free-photo/boy-giving-blue-wrapped-birthday-gift-box-his-grandfather_23-2148196663.jpg?size=626&ext=jpg&ga=GA1.1.761425461.1706113794&semt=ais" alt="Card 4" />
          </div>
          <div className="card_title title-black">
          <Link to="/ChrismasGift"> <p>Gifts For Dad</p></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Category;