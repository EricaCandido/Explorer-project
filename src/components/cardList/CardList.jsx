import styles from "./index.module.scss";
import Card from "../card";
const CardList = ({ dataList }) => {
  return (
    <div className={styles.CardList}>
      {dataList.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default CardList;
