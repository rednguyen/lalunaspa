import "./Footer.css"
import NavigationItems from "../config/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="google-map">
            <iframe style={{filter: "invert(90%)"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.6228652618297!2d108.31918947513184!3d15.876406784775467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31420e7d3bcaf44d%3A0x5f02f8b9249d14c!2sLaluna%20Hoi%20An%20Riverside%20Hotel%20%26%20Spa!5e0!3m2!1sen!2sus!4v1713298835795!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>

            {NavigationItems.footer.map(item => (
                <h4 className="footer-item">{item.addr}</h4>
            ))}

            
            <div className="social-container">
                <a href="https://www.youtube.com/c/jamesqquick" className="youtube social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>

                <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                
                <a href="http://www.instagram.com/larnbuildteach" className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <h5 className="copyright">Copyright © 2024 Luna Spa Hoi An</h5>
            </div>

            
        </div>
    )
}
export default Footer