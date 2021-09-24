import OtherRatings from "./OtherRatings";
import style from "../../styles/Movie.module.css"


export default function RatingsSection(props){

  return(
    <div className={style.ratingSection}>
      <h4>Rating on IMDb: {props.imdb}</h4>
      <h4>Rating in other websites:</h4>
      <OtherRatings ratings={props.siteRatings} />
    </div>
  )
}
