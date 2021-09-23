import GoBack from "./GoBack";
import FilmBanner from "./FilmBanner";
import GenericData from "./GenericData";
import FilmSynopsis from "./FilmSynopsis";
import GenericTimeData from "./GenericTimeData";
import RatingsSection from "./RatingsSection";

export default function MainMovieSection({filmResult, siteRatings}) {

  return(
    <main>
      <GoBack message={'Not what you wanted ?'} url={'/filmes'}/>
      <FilmBanner title={filmResult.Title} posterUrl={filmResult.Poster} />
      <GenericData genericDataName={'Genres'} genericData={filmResult.Genre} />
      <FilmSynopsis Title={filmResult.Title} Plot={filmResult.Plot} />
      <GenericTimeData genericDataName={'Year of launch'} genericData={filmResult.Year} />
      <GenericTimeData genericDataName={'Runtime'} genericData={filmResult.Runtime} />
      <GenericData genericDataName={'Actors'} genericData={filmResult.Actors} />
      <RatingsSection imdb={filmResult.imdbRating} siteRatings={siteRatings} />
    </main>
  )
}
