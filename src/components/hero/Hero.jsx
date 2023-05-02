import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <img
        className={styles.heroImg}
        src="https://totalenergies.com/sites/g/files/nytnzq121/files/styles/w_1110/public/thumbnails/image/istock_leonid_andronov_75429801.jpg1600_-1xoxar.jpg?itok=I6BbTPgi"
        alt="Ireland"
      />
      <h3>
        It's not just an Island, <br />
        it's Ireland.
      </h3>
    </div>
  );
};

export default Hero;
