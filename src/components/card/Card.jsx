import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`/activity/${data.id}`);
  };

  return (
    <div className={styles.Card}>
      <img src={data.image} alt={data.title} />
      <div className={styles.text}>
        <h3 onClick={onHandleClick} className={styles.title}>
          {data.title.slice(0, 20)}
        </h3>
        <p>{data.description.slice(0, 100)}...</p>
        <p className={styles.price}>{data.price} $</p>
      </div>
    </div>
  );
};

export default Card;
