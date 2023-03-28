import styles from "./index.module.scss";
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.wrapper}>
        <ul className={styles.socialMedia}>
          <h3>Social media</h3>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsLinkedin />
          </li>
        </ul>
        <ul className={styles.company}>
          <h3>Company</h3>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Contacts</li>
          <li>Careers</li>
          <li>Press</li>
          <li>News</li>
          <li>Contacts</li>
        </ul>

        <ul className={styles.cities}>
          <h3>Recommended cities</h3>
          <li>Milano</li>
          <li>Roma</li>
          <li>Madrid</li>
          <li>Parigi</li>
          <li>Amsterdam</li>
        </ul>
      </div>
      <p>Created by Erica Candido</p>
    </div>
  );
};

export default Footer;
