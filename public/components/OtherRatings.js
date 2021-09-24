
import {useEffect, useState} from "react";
import {CustomUl} from "../../styles/MovieStyles";

export default function OtherRatings(props) {
  const [ratingsList, setRatingsList] = useState([]);
  useEffect(() => {
    if (props.ratings !== undefined) {
      setRatingsList(props.ratings)
    }
  }, [props.ratings])
  return (
    <CustomUl>
      {
        ratingsList.map((rating, index) => {
          return (
            <li key={rating.Source}>
              {rating.Source} <b> {rating.Value}</b>
            </li>
          );
        })
      }
    </CustomUl>
  )
}
