import styles from "../styles/pages/App.module.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader/Loader";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const onHandleInput = (e) => {
    setInputValue(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/activities?activity=${inputValue}`);
  };
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <h1 className={styles.generalTitle}>Ireland</h1>
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
              five-sixths of the westernmost major island of the British Isles.
            </b>
          </p>
          <p>
            The magnificent scenery of Ireland's Atlantic coastline faces a
            2,000-mile- (3,200-km-) wide expanse of ocean, and its geographic
            isolation has helped it to develop a rich heritage of culture and
            tradition that was linked initially to the Gaelic language. Washed
            by abundant rain, the country's pervasive grasslands create a
            green-hued landscape that is responsible for the popular sobriquet
            Emerald Isle. Ireland is also renowned for its wealth of folklore,
            from tales of tiny leprechauns with hidden pots of gold to that of
            the patron saint, Patrick, with his legendary ridding the island of
            snakes and his reputed use of the three-leaved shamrock as a symbol
            for the Christian Trinity.
          </p>
        </div>
      </div>
      <div className={styles.culture}>
        <div className={styles.text}>
          <h3 className={styles.title}>Cultural life</h3>

          <p>
            The cultural milieu of Ireland has been shaped by the dynamic
            interplay between the ancient Celtic traditions of the people and
            those imposed on them from outside, notably from Britain. This has
            produced a culture of rich, distinctive character in which the use
            of language—be it Irish or English—has always been the central
            element. Not surprisingly, Irish culture is best known through its
            literature, drama, and songs; above all, the Irish are renowned as
            masters of the art of conversation.
          </p>
          <p>
            Use of the Irish language declined steadily during the 19th century
            and was nearly wiped out by the Great Famine of the 1840s and
            subsequent emigration. From the mid-19th century, in the years
            following the famine, there was a resurgence in Irish language and
            traditional culture.
          </p>
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
            Although Ireland was invaded and colonized within historical times
            by Celts, Norsemen, Normans, English, and Scots, there are no
            corresponding ethnic distinctions. Ireland has always been known as
            a welcoming place, and diversity is not a phenomenon new to the
            country.
          </p>
          <p>
            Ethnic and racial minorities make up about 12 percent of the
            population of Ireland—a proportion that doubled in the first decade
            of the 21st century. Immigration from the rest of Europe, Africa,
            and Asia has been significant since the last two decades of the 20th
            century. The key factors in increased immigration have been the
            more-open labour market provided by the European Union and the
            globalized nature of the contemporary Irish economy, both of which
            have attracted a wave of new residents. Today Poles constitute the
            largest minority population in Ireland.
          </p>
        </div>
      </div>
    </div>
  );
}
