import styles from "./index.module.scss";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <Navbar />
      <div className={styles.bg}></div>
      <section className={styles.children}>
        <Outlet />
      </section>
      <div className={styles.bgSmall}></div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
