import styles from "../../styles/pages/Activity.module.scss";

import CardList from "../../components/cardList/CardList";

import { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

export default function Activity() {
  const [dataList, setDataList] = useState([]);

  const [searchParams] = useSearchParams();

  const searchedActivities = (list, param) =>
    list.filter((item) => isTagged(item.tags, param));

  const isTagged = (listaditag, param) =>
    listaditag
      .toString()
      .toLowerCase()
      .split(",")
      .includes(param.toLowerCase());

  const searchedParam = searchParams.get("activity")?.toLowerCase();

  useEffect(() => {
    GET("https://failteireland.azure-api.net/opendata-api/v1/activities").then(
      (data) => setDataList(data.results)
    );
  }, []);

  return (
    <div className={styles.Activity}>
      {searchedParam ? (
        <div>
          {searchedActivities(dataList, searchedParam).length !== 0 ? (
            <div>
              <h3 className={styles.category}>Results:</h3>
              <CardList
                dataList={searchedActivities(dataList, searchedParam)}
              />
            </div>
          ) : (
            <div className={styles.noMatchSection}>
              <div className={styles.noMatchSectionText}>
                <h3 className={styles.category}>
                  Sorry, no matching results , try again...
                </h3>
                <Link to="/" className={styles.backBtn}>
                  <BiArrowBack />
                </Link>
              </div>
              <img
                className={styles.nomatchImg}
                src="https://www.planetware.com/wpimages/2019/09/ireland-in-pictures-most-beautiful-places-to-visit-derry.jpg"
                alt="Derry img"
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3 className={styles.category}>Activities</h3>
          <CardList dataList={dataList} route={"/activities"} />{" "}
        </div>
      )}
    </div>
  );
}
