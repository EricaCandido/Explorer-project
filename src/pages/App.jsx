import styles from "../styles/pages/App.module.scss";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Footer />
    </div>
  );
}
