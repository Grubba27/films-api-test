import GoBack from "./GoBack";
import FilmBanner from "./FilmBanner";
import GenericData from "./GenericData";
import FilmSynopsis from "./FilmSynopsis";
import style from "../../styles/Movie.module.css"
import FilmSpec from "./FilmSpec";



export default function MainMovieSection({filmResult, siteRatings}) {

  return(
    <main className={style.mainMovieSection}>
      <GoBack message={'Not what you wanted ?'} url={'/filmes'}/>
      <FilmBanner title={filmResult.Title} posterUrl={filmResult.Poster}>
        <GenericData genericDataName={'Genres'} genericData={filmResult.Genre} />
        <GenericData genericDataName={'Actors'} genericData={filmResult.Actors} />
        <FilmSynopsis Title={filmResult.Title} Plot={filmResult.Plot} />
      </FilmBanner>
      <FilmSpec filmResult={filmResult} siteRatings={siteRatings} />
    </main>
  )
}
