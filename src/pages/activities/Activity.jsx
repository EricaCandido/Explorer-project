import styles from "../../styles/pages/Activity.module.scss";

import CardList from "../../components/cardList/CardList";

import { useEffect, useState } from "react";
import { GET } from "../../utils/http";

export default function Activity() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    GET("https://failteireland.azure-api.net/opendata-api/v1/activities").then(
      (data) => setDataList(data.results)
    );
  }, []);

  return (
    <div className={styles.Activity}>
      <h3 className={styles.category}>Activities</h3>
      <CardList dataList={dataList} route={"/activities"} />
    </div>
  );
}
