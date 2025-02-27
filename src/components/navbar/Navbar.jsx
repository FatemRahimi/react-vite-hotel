// import React, { useState } from "react";
// import { BiSearch } from "react-icons/bi";
// import { BsPerson } from "react-icons/bs";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { AiOutlineClose } from "react-icons/ai";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTwitter,
//   FaYoutube
// } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { Link as Links } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const [displayNav, setDisplayNav] = useState(false);
//   const handleNav = () => setNav(!nav);
//   return (
//     <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
//       <div className={nav ? "logo dark" : "logo"}>
//         <h2>
//           CYF HOTEL
//           <img
//             className={nav ? "nav-logo darken" : "nav-logo"}
//             src="https://natasha-skin.com/wp-content/uploads/2020/03/Logo_.png"
//             alt="smile face"
//           />
//         </h2>
//       </div>
//       <ul className="nav-menu">
//         {displayNav ? (
//           <>
//             <Links to="/" smooth={true} duration={500}>
//               <li className="nav-admin" onClick={() => setDisplayNav(false)}>
//                 Admin
//               </li>
//             </Links>

//             <Links className="nav-home" to="/home" smooth={true} duration={500}>
//               <li className="nav-home">Home</li>
//             </Links>

//             <Link to="destinations" smooth={true} duration={500}>
//               <li>Destinations</li>
//             </Link>
//             <Link to="search-section" smooth={true} duration={500}>
//               <li>Book</li>
//             </Link>
//             <Link to="carousel" smooth={true} duration={500}>
//               <li>Travel</li>
//             </Link>

//             <Link to="views" smooth={true} duration={500}>
//               <li>Views</li>
//             </Link>
//           </>
//         ) : (
//           <>
//             <Links to="/" smooth={true} duration={500}>
//               <li className="nav-admin">Admin</li>
//             </Links>

//             <Links to="/home" smooth={true} duration={500}>
//               <li className="nav-home" onClick={() => setDisplayNav(true)}>
//                 more
//               </li>
//             </Links>
//           </>
//         )}
//       </ul>
//       <div className="nav-icons">
//         <BiSearch className="icon" style={{ marginRight: "1rem" }} />
//         <BsPerson className="icon" />
//       </div>
//       <div className="hamburger" onClick={handleNav}>
//         {!nav ? (
//           <HiOutlineMenuAlt4 className="icon" />
//         ) : (
//           <AiOutlineClose style={{ color: "#000" }} className="icon" />
//         )}
//       </div>

//       <div className={nav ? "mobile-menu active" : "mobile-menu"}>
//         <ul className="mobile-nav">
//           <Links to="/" smooth={true} duration={500}>
//             <li className="nav-admin">Admin</li>
//           </Links>
//           <Links to="/home" smooth={true} duration={500}>
//             <li className="nav-home">Home</li>
//           </Links>

//           <Link to="destinations" smooth={true} duration={500}>
//             <li>Destinations</li>
//           </Link>
//           <Link to="search-section" smooth={true} duration={500}>
//             <li>Book</li>
//           </Link>
//           <Link to="carousel" smooth={true} duration={500}>
//             <li>Travel</li>
//           </Link>

//           <Link to="views" smooth={true} duration={500}>
//             <li>Views</li>
//           </Link>
//         </ul>
//         <div className="mobile-menu-bottom">
//           <div className="menu-icons">
//             <button className="button">Search</button>
//             <button className="button">Account</button>
//           </div>
//           <div className="social-icons">
//             <FaFacebook className="icon" />
//             <FaInstagram className="icon" />
//             <FaTwitter className="icon" />
//             <FaPinterest className="icon" />
//             <FaYoutube className="icon" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as Links } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [displayNav, setDisplayNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2>
          CYF HOTEL
          <img
            className={nav ? "nav-logo darken" : "nav-logo"}
            src="https://natasha-skin.com/wp-content/uploads/2020/03/Logo_.png"
            alt="smile face"
          />
        </h2>
      </div>
      <ul className="nav-menu">
        {displayNav ? (
          <>
            <Links to="/" smooth="true" duration={500}>
              <li className="nav-admin" onClick={() => setDisplayNav(false)}>
                Admin
              </li>
            </Links>

            <Links className="nav-home" to="/home" smooth="true" duration={500}>
              <li className="nav-home">Home</li>
            </Links>

            <Link to="destinations" smooth="true" duration={500}>
              <li>Destinations</li>
            </Link>
            <Link to="search-section" smooth="true" duration={500}>
              <li>Book</li>
            </Link>
            <Link to="carousel" smooth="true" duration={500}>
              <li>Travel</li>
            </Link>

            <Link to="views" smooth="true" duration={500}>
              <li>Views</li>
            </Link>
          </>
        ) : (
          <>
            <Links to="/" smooth="true" duration={500}>
              <li className="nav-admin">Admin</li>
            </Links>

            <Links to="/home" smooth="true" duration={500}>
              <li className="nav-home" onClick={() => setDisplayNav(true)}>
                more
              </li>
            </Links>
          </>
        )}
      </ul>
      <div className="nav-icons">
        <BiSearch className="icon" style={{ marginRight: "1rem" }} />
        <BsPerson className="icon" />
      </div>
      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className="icon" />
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Links to="/" smooth="true" duration={500}>
            <li className="nav-admin">Admin</li>
          </Links>
          <Links to="/home" smooth="true" duration={500}>
            <li className="nav-home">Home</li>
          </Links>

          <Link to="destinations" smooth="true" duration={500}>
            <li>Destinations</li>
          </Link>
          <Link to="search-section" smooth="true" duration={500}>
            <li>Book</li>
          </Link>
          <Link to="carousel" smooth="true" duration={500}>
            <li>Travel</li>
          </Link>

          <Link to="views" smooth="true" duration={500}>
            <li>Views</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button className="button">Search</button>
            <button className="button">Account</button>
          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
