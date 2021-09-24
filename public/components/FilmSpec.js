import GenericTimeData from "./GenericTimeData";
import RatingsSection from "./RatingsSection";
import style from "../../styles/Movie.module.css"

export default function FilmSpec({filmResult, siteRatings}){

  return(
    <div className={style.specSection}>
      <div className={style.timeSpecSection}>
        <GenericTimeData genericDataName={'Year of launch'} genericData={filmResult.Year} />
        <GenericTimeData genericDataName={'Runtime'} genericData={filmResult.Runtime} />
      </div>

      <RatingsSection imdb={filmResult.imdbRating} siteRatings={siteRatings} />
    </div>
  )
}
