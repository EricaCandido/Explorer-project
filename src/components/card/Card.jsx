import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = ({ data, route }) => {
  const navigate = useNavigate();

  const onHandleClick = () => {
    navigate(`${route}/${data?.name}`);
  };
  return (
    <div className={styles.Card}>
      <img
        src={`https://streetviewhub.com/shots?${Math.floor(
          Math.random() * 20
        )}`}
        alt={data?.image.caption}
      />
      <div className={styles.text}>
        <h3 onClick={onHandleClick} className={styles.title}>
          {data?.name}
        </h3>
        <b>Tags:</b>
        <p className={styles.tags}>
          {data?.tags.slice(0, 6).map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </p>
        <p className={styles.officialSite}>
          <Link to={data?.url}>Official site</Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
