// import React from "react";
// import "./Footer.css";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaPinterest,
//   FaTwitter,
//   FaYoutube
// } from "react-icons/fa";

// function Footer(props) {
//   return (
//     <div className="footer">
//       <div className="container">
//         <div className="top">
//           <h3>CYF HOTEL</h3>
//           <div className="social">
//             <FaFacebook className="icon" />
//             <FaInstagram className="icon" />
//             <FaTwitter className="icon" />
//             <FaPinterest className="icon" />
//             <FaYoutube className="icon" />
//           </div>
//         </div>
//         <div className="bottom">
//           <div className="left">
//             <ul>
//               <li>About</li>
//               <li>Partnerships</li>
//               <li>Careers</li>
//               <li>Newsroom</li>
//               <li>Advertising</li>
//             </ul>
//           </div>
//           <div className="right">
//             <ul>
//               <li>Contact</li>
//               <li>Terms</li>
//               <li>Policy</li>
//               <li>Privacy</li>
//               <li>Pricing</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="address">
//         <ul>
//           {props.details.map((text, index) => (
//             <li key={index}>{text}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

function Footer({ details }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="top">
          <h3>CYF HOTEL</h3>
          <div className="social">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <ul>
              <li>About</li>
              <li>Partnerships</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Advertising</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Contact</li>
              <li>Terms</li>
              <li>Policy</li>
              <li>Privacy</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="address">
        <ul>
          {details.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
