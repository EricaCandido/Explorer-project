import styles from "../../styles/pages/AttractionsId.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import { BsWhatsapp } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";

export default function AttractionsId() {
  const { id } = useParams();
  const [dataItem, setDataItem] = useState({});
  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    setLoaderState(true);
    GET(
      `https://failteireland.azure-api.net/opendata-api/v1/activities?$filter=name%20eq%20%27${id}%27`
    ).then(({ results }) => {
      setDataItem(() => results[0]);
      setLoaderState(false);
    });
  }, []);

  return (
    <>
      {loaderState && <Loader />}
      {dataItem == undefined ? (
        <p className={styles.notAvailable}>
          Details not available for this activity
        </p>
      ) : (
        <div className={styles.AttractionsId}>
          {console.log(dataItem)}
          <img
            src={`https://streetviewhub.com/shots?${Math.floor(
              Math.random() * 20
            )}`}
            alt={dataItem.name}
          />
          <div className={styles.text}>
            <h1 className={styles.title}>{dataItem.name}</h1>
            <p className={styles.categories}>
              {dataItem?.tags?.map((tag, i) => (
                <li className={styles.category} key={i}>
                  {tag}
                </li>
              ))}
            </p>
            <p className={styles.phone}>
              <BsWhatsapp />
              {dataItem.telephone}
            </p>
            <p className={styles.address}>
              <SiGooglemaps />
              {dataItem.address?.addressLocality}
              {dataItem.address?.addressRegion}
              {dataItem.address?.addressCountry}
            </p>
            <p className={styles.officialSite}>
              <Link to={dataItem?.url}>Official site</Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
