import styles from "./index.module.scss";
import Card from "../card";
const CardList = ({ dataList, route }) => {
  return (
    <div className={styles.CardList}>
      {dataList.map((item, i) => (
        <Card data={item} key={i} route={route} />
      ))}
    </div>
  );
};

export default CardList;
