import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { MdLocalActivity, MdAttractions } from "react-icons/md";
import { FaHotel } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.wrapper}>
        <li>
          <Link to="/">
            <p className={styles.icon}>
              <AiTwotoneHome />
            </p>
            <p className={styles.literal}>Home</p>
          </Link>
        </li>
        {/* <li>
          <Link to="/accomodations">
            <p className={styles.icon}>
              <FaHotel />
            </p>
            <p className={styles.literal}>Accomodation</p>
          </Link>
        </li> */}
        <li>
          <Link to="/activities">
            <p className={styles.icon}>
              <MdLocalActivity />
            </p>
            <p className={styles.literal}>Activities</p>
          </Link>
        </li>
        <li>
          <Link to="/attractions">
            <p className={styles.icon}>
              <MdAttractions />
            </p>
            <p className={styles.literal}>Attractions</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
