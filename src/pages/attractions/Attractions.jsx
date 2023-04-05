import styles from "../../styles/pages/Attractions.module.scss";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList/CardList";
import Loader from "../../components/loader";

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
      {attractionsList.length == 0 && <Loader />}
      <CardList dataList={attractionsList} route={"/attractions"} />
    </div>
  );
}
