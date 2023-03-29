import styles from "../../styles/pages/Activity.module.scss";

import CardList from "../../components/cardList/CardList";

import { useEffect, useState } from "react";
import { GET } from "../../utils/http";

export default function Activity() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    GET("https://fakestoreapi.com/products").then((data) => setDataList(data));
  }, []);

  return (
    <div className={styles.Activity}>
      <h3 className={styles.category}>Activities</h3>
      <CardList dataList={dataList} />
    </div>
  );
}
