import GenericTimeData from "./GenericTimeData";
import RatingsSection from "./RatingsSection";

export default function FilmSpec({filmResult, siteRatings}){

  return(
    <div>
      <GenericTimeData genericDataName={'Year of launch'} genericData={filmResult.Year} />
      <GenericTimeData genericDataName={'Runtime'} genericData={filmResult.Runtime} />
      <RatingsSection imdb={filmResult.imdbRating} siteRatings={siteRatings} />
    </div>
  )
}
