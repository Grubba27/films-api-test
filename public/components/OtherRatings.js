import style from "../../styles/Movie.module.css"
import {useEffect, useState} from "react";

export default function OtherRatings(props) {
  const [ratingsList, setRatingsList] = useState([]);
  useEffect(() => {
    if (props.ratings !== undefined) {
      setRatingsList(props.ratings)
    }
  }, [props.ratings])
  return (
    <ul className={style.otherSitesList}>
      {
        ratingsList.map((rating, index) => {
          return (
            <li key={rating.Source}>
              {rating.Source} <b> {rating.Value}</b>
            </li>
          );
        })
      }
    </ul>
  )
}
