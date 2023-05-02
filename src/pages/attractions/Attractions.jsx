import styles from "../../styles/pages/Attractions.module.scss";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import CardList from "../../components/cardList/CardList";
import Loader from "../../components/loader";

export default function Attractions() {
  const [attractionsList, setAttractionsList] = useState([]);
  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    setLoaderState(true);
    GET("https://failteireland.azure-api.net/opendata-api/v1/attractions").then(
      (data) => {
        setAttractionsList(data.results);
        setLoaderState(false);
      }
    );
  }, []);

  return (
    <div className={styles.Attractions}>
      <h3 className={styles.generalTitle}>Attractions</h3>
      {loaderState && <Loader />}
      <CardList dataList={attractionsList} route={"/attractions"} />
    </div>
  );
}
