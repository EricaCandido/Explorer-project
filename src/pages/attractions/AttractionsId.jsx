import styles from "../../styles/pages/AttractionsId.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import { Link } from "react-router-dom";
import { results } from "../../utils/mocks/attractions";

export default function AttractionsId() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState(results[0]);

  // useEffect(() => {
  //   GET(
  //     `https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=name%20eq%20%27${id}%27`
  //   ).then((data) => setDataItem(() => data.results[0]));
  // }, []);

  return (
    <div className={styles.AttractionsId}>
      {console.log(dataItem)}
      <img src={dataItem.image.url} alt={dataItem.name} />
      <div className={styles.text}>
        <h1>{dataItem.name}</h1>
        <p className={styles.category}>
          {dataItem.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </p>
        <p className={styles.phone}>{dataItem.telephone}</p>
        <p className={styles.address}>
          {dataItem.address?.addressLocality}
          {dataItem.address?.addressRegion}
          {dataItem.address?.addressCountry}
        </p>
        <p className={styles.officialSite}>
          <Link to={dataItem?.url}>Official site</Link>
        </p>
      </div>
    </div>
  );
}
