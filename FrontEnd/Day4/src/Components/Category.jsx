import '../css/Category.css';
import { Link } from 'react-router-dom';
import { BiSolidCategory } from "react-icons/bi";
import { IoGiftSharp } from "react-icons/io5";
import { FaGlassCheers } from "react-icons/fa";
import { IoWomanSharp } from "react-icons/io5";
// import {fa-solid fa-house} from "react-icons";
import { GrPersonalComputer } from "react-icons/gr";


const Category = () => {
  return (
    <div className="background-container">
 
    <div>
      {/* <nav className="navbar"> */}
      <h2 className="category-head" ><Link to="/Home"><BiSolidCategory /></Link>Collections 
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
            <img src="https://media4.giphy.com/media/I6CBGRiWHMStkqLrf1/200w.gif?cid=6c09b9521at6jrhoqn851ugkj5icfs2v38np7z7gtbmgzqs3&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="Card 1" />
          </div>
          <div className="card_title title-white">
           <Link to='/Anniversary'> <p>Anniversary Gifts</p></Link>
          </div>
        </div>

        <div className="card 2">
          <div className="card_image">
            <img src="https://i.pinimg.com/originals/96/09/3c/96093cad619246062f145d7f5ea23d2b.gif" alt="Card 2" />
          </div>
          <div className="card_title title-white">
           <Link to="/Birthday"><p>Birthday Gifts</p></Link>
          </div>
        </div>

        <div className="card 3">
          <div className="card_image">
            <img src="https://i.pinimg.com/originals/fd/0a/c5/fd0ac541a4279f9994d0dcba79f5ff23.gif" alt="Card 3" />
          </div>
          <div className="card_title">
          <Link to="/Valentine">  <p>Valentine Gifts</p></Link>
          </div>
        </div>

        <div className="card 4">
          <div className="card_image">
            <img src="https://media.tenor.com/HyVA9hW-jooAAAAi/christmas-present-christmas-gifts.gif" alt="Card 4" />
          </div>
          <div className="card_title title-black">
           <Link to="/ChrismasGift"> <p>Christmas Gifts</p></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Category;