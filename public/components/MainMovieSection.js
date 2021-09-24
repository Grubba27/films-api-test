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
        <FilmSynopsis Title={filmResult.Title} Plot={filmResult.Plot} />
        <GenericData genericDataName={'Actors'} genericData={filmResult.Actors} />
        <FilmSpec filmResult={filmResult} siteRatings={siteRatings} />
      </FilmBanner>
    </main>
  )
}
