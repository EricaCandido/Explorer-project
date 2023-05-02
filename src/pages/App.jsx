import styles from "../styles/pages/App.module.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../components/hero/Hero";

import { historyText, culturalText, peopleText } from "../utils/mock";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [textState, setTextState] = useState({
    histState: false,
    cultState: false,
    peopleState: false,
  });

  const onHandleInput = (e) => {
    setInputValue(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/activities?activity=${inputValue}`);
  };

  const onHandleHistRead = () => {
    setTextState((prev) => ({
      ...prev,
      histState: !prev.histState,
    }));
  };
  const onHandleCultRead = () => {
    setTextState((prev) => ({
      ...prev,
      cultState: !prev.cultState,
    }));
  };
  const onHandlePeopleRead = () => {
    setTextState((prev) => ({
      ...prev,
      peopleState: !prev.peopleState,
    }));
  };
  return (
    <div className={styles.App}>
      <Hero />
      <div className={styles.header}>
        <form onSubmit={onHandleSubmit}>
          <input
            onChange={onHandleInput}
            value={inputValue}
            type="text"
            required
            placeholder="Search a tag i.g. castle"
          />
          <input className={styles.searchBtn} type="submit" value="Go" />
        </form>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          <img
            className={styles.homeImg}
            src="https://cdn.britannica.com/36/1736-050-3AB11366/Cliffs-of-Moher-coast-County-Clare-Ireland.jpg"
            alt="Cliffs-of-Moher-coast-County-Clare-Ireland"
          />
          <div className={styles.text}>
            <h3 className={styles.title}>History</h3>
            <p>
              <b>
                Ireland, Irish Éire, country of western Europe occupying
                five-sixths of the westernmost major island of the British
                Isles.
              </b>
            </p>
            <p>
              {!textState.histState ? historyText.slice(0, 500) : historyText}
              {!textState.histState && "..."}
            </p>
            <button onClick={onHandleHistRead} className={styles.readBtn}>
              {!textState.histState ? "Read more" : "Read less"}
            </button>
          </div>
        </div>
        <div className={styles.culture}>
          <div className={styles.text}>
            <h3 className={styles.title}>Cultural life</h3>
            <p>
              {!textState.cultState ? culturalText.slice(0, 500) : culturalText}
              {!textState.cultState && "..."}
            </p>
            <button onClick={onHandleCultRead} className={styles.readBtn}>
              {!textState.cultState ? "Read more" : "Read less"}
            </button>
          </div>
          <img
            className={styles.homeImg}
            src="https://www.planetware.com/wpimages/2019/09/ireland-in-pictures-most-beautiful-places-to-visit-hapenny-bridge-dublin.jpg"
            alt="Dublin"
          />
        </div>

        <div className={styles.people}>
          <img
            className={styles.homeImg}
            src="https://www.planetware.com/wpimages/2019/09/ireland-in-pictures-most-beautiful-places-to-visit-galway.jpg"
            alt="Galway img"
          />
          <div className={styles.text}>
            <h3 className={styles.title}>People</h3>

            <p>
              {!textState.peopleState ? peopleText.slice(0, 500) : peopleText}
              {!textState.peopleState && "..."}
            </p>
            <button onClick={onHandlePeopleRead} className={styles.readBtn}>
              {!textState.peopleState ? "Read more" : "Read less"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
