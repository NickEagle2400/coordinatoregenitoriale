import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = (props) => {
  return (
    <section className="footer">
      <div className="footer-menu">
        <div className="footer-menu-col">
          <h4>Seguimi sui Social</h4>
          <hr />
          <p><Link to="https://www.facebook.com/Coordinatore.CarloVittorio.Giovannelli"><i class="fa-brands fa-facebook-f"></i> Facebook</Link></p>
          <p><Link to="https://www.instagram.com/carlovittorio_giovannelli/"><i class="fa-brands fa-instagram"></i> Instagram</Link></p>
          <p><Link to="https://www.linkedin.com/in/carlovittoriogiovannelli/"><i class="fa-brands fa-linkedin-in"></i> LinkedIn</Link></p>
        </div>
        <div className="footer-menu-col">
          <h4>Servizi</h4>
          <hr />
          <p>Servizio 1</p>
          <p>Servizio 2</p>
          <p>Servizio 3</p>
        </div>
        <div className="footer-menu-col">
          <h4>Uffici</h4>
          <hr />
          <p><i class="fa-solid fa-location-dot"></i> Via M. Bianco, 8, Milano 24045, Italia</p>
          <p><i class="fa-solid fa-location-dot"></i> Via Fam. Carlo Scacchi, 6, Capolago 6825, Svizzera</p>
        </div>
        <div className="footer-menu-col">
          <h4>Contatti</h4>
          <hr />
          <p><i class="fa-solid fa-phone"></i><Link to=""> +39 333 33 33 333</Link></p>
          <p><i class="fa-solid fa-phone"></i><Link to=""> +04 333 33 33 333</Link></p>
          <p><i class="fa-solid fa-envelope"></i><Link to=""> info@coordinatoregenitorialemilano.it</Link></p>
        </div>
      </div>
      <div class="biz-info">
        <div>
          <p>Copyright &copy; 2022. ApplyCom S.a.g.l. | VAT CHE-195.139.536 | Via Fam. Carlo Scacchi, 15, Capolago 6285, Svizzera</p>
        </div>
        <div>
          <p>Developed by <Link to="https://www.nicolasricardi.com" rel="dofollow" target="_blank">Nicolas Ricardi - Web Developer</Link> | Privacy Policy | Cookie Policy </p>
        </div>
      </div>
    </section>
  )
}
// const Footer = class extends React.Component {
//   render() {
//     return (
//       <footer className="footer has-background-black has-text-white-ter">
//         <div className="content has-text-centered">
//           <img
//             src={logo}
//             alt="Kaldi"
//             style={{ width: "14em", height: "10em" }}
//           />
//         </div>
//         <div className="content has-text-centered has-background-black has-text-white-ter">
//           <div className="container has-background-black has-text-white-ter">
//             <div style={{ maxWidth: "100vw" }} className="columns">
//               <div className="column is-4">
//                 <section className="menu">
//                   <ul className="menu-list">
//                     <li>
//                       <Link to="/" className="navbar-item">
//                         Home
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/about">
//                         About
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/products">
//                         Products
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/contact/examples">
//                         Form Examples
//                       </Link>
//                     </li>
//                     <li>
//                       <a
//                         className="navbar-item"
//                         href="/admin/"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Admin
//                       </a>
//                     </li>
//                   </ul>
//                 </section>
//               </div>
//               <div className="column is-4">
//                 <section>
//                   <ul className="menu-list">
//                     <li>
//                       <Link className="navbar-item" to="/blog">
//                         Latest Stories
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="navbar-item" to="/contact">
//                         Contact
//                       </Link>
//                     </li>
//                   </ul>
//                 </section>
//               </div>
//               <div className="column is-4 social">
//                 <a title="facebook" href="https://facebook.com">
//                   <img
//                     src={facebook}
//                     alt="Facebook"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//                 <a title="twitter" href="https://twitter.com">
//                   <img
//                     className="fas fa-lg"
//                     src={twitter}
//                     alt="Twitter"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//                 <a title="instagram" href="https://instagram.com">
//                   <img
//                     src={instagram}
//                     alt="Instagram"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//                 <a title="vimeo" href="https://vimeo.com">
//                   <img
//                     src={vimeo}
//                     alt="Vimeo"
//                     style={{ width: "1em", height: "1em" }}
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// };

export default Footer;
