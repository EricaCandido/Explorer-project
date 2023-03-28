import styles from "../styles/pages/About.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className={styles.About}>
      <Navbar />
      <h3>About section, work in progress...</h3>
      <Footer />
    </div>
  );
}
