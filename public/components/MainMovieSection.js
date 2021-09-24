import GoBack from "./GoBack";
import FilmBanner from "./FilmBanner";
import GenericData from "./GenericData";
import FilmSynopsis from "./FilmSynopsis";
import FilmSpec from "./FilmSpec";
import {MainMovieSectionStyle} from "../../styles/MovieStyles";



export default function MainMovieSection({filmResult, siteRatings}) {

  return(
    <MainMovieSectionStyle>
      <GoBack message={'Not what you wanted ?'} url={'/filmes'}/>
      <FilmBanner title={filmResult.Title} posterUrl={filmResult.Poster}>
        <GenericData genericDataName={'Genres'} genericData={filmResult.Genre} />
        <FilmSynopsis Title={filmResult.Title} Plot={filmResult.Plot} />
        <GenericData genericDataName={'Actors'} genericData={filmResult.Actors} />
        <FilmSpec filmResult={filmResult} siteRatings={siteRatings} />
      </FilmBanner>
    </MainMovieSectionStyle>
  )
}
