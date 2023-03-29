import styles from "../../styles/pages/Id.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GET } from "../../utils/http";

export default function () {
  const { id } = useParams();
  const [dataItem, setDataitem] = useState({});

  useEffect(() => {
    GET(`https://fakestoreapi.com/products/${id}`).then((data) =>
      setDataitem(data)
    );
  }, []);

  return (
    <div className={styles.Id}>
      <img src={dataItem.image} alt={dataItem.title} />
      <div className={styles.text}>
        <h1>{dataItem.title}</h1>
        <p className={styles.category}>{dataItem.category}</p>
        <p>{dataItem.description}</p>
        <p className={styles.price}>{dataItem.price} $</p>
      </div>
    </div>
  );
}
