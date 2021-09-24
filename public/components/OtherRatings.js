import style from "../../styles/Movie.module.css"

export default function OtherRatings(props) {
  return(
    <ul className={style.otherSitesList}>
      {
        props.ratings.map((rating, index) => {
          return (
            <li key={rating.Source}>
              {rating.Source} {rating.Value}
            </li>
          );
        })
      }
    </ul>
  )
}
