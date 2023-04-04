import styles from "../../styles/pages/Attractions.module.scss";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList/CardList";

export default function Attractions() {
  const [attractionsList, setAttractionsList] = useState([]);

  useEffect(() => {
    GET("https://failteireland.azure-api.net/opendata-api/v1/attractions").then(
      (data) => setAttractionsList(data.results)
    );
  }, []);

  return (
    <div className={styles.Attractions}>
      <h3 className={styles.generalTitle}>Attractions</h3>
      <CardList dataList={attractionsList} route={"/attractions"} />
    </div>
  );
}
