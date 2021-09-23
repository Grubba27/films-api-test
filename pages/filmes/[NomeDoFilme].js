import secrets from '../../../secrets.json';
import axios from "axios";
import {useEffect} from "react";
import GoBack from "../../public/components/GoBack";
import FilmSynopsis from "../../public/components/FilmSynopsis";
import GenericData from "../../public/components/GenericData";
import GenericTimeData from "../../public/components/GenericTimeData";
import FilmBanner from "../../public/components/FilmBanner";

export async function getServerSideProps({query}) {
  // get id of the url || pegar o nome do filme via url
  const {NomeDoFilme} = query;
  // get API key from env || usar as keys que estão no arquivo secrets.json
  const apiKey = secrets.API_KEY;

  const response = await axios(
    {
      method: 'get',
      url: `https://www.omdbapi.com/?t=${NomeDoFilme}&apikey=${apiKey}`
    }
  );
  const filmResult = response.data
  return {
    props: {
      filmResult
    }
  }

}


// essa prop filmResult seria tipado caso fosse feita em TS
// devido a API não ter um type system facil de se obter optei por deixar em js
// observando que tenho conhecimento de TS e poderia ser de melhor manutenção caso fosse implementado em TS


export default function NomeDoFilme({filmResult}) {


  useEffect(() => {
    console.log(filmResult)
  }, [filmResult]);


  return (
    <>
      {
        filmResult.Error === true ?
          <GoBack message={filmResult.Error} url={'/filmes'}/>
          :
          <>
            <title>
              {filmResult.Title || 'Not found'}
            </title>
            <main>
              <GoBack message={'Not what you wanted ?'} url={'/filmes'}/>
              <FilmBanner title={filmResult.Title} posterUrl={filmResult.Poster} />
              <GenericData genericDataName={'Genres'} genericData={filmResult.Genre} />
              <FilmSynopsis Title={filmResult.Title} Plot={filmResult.Plot} />
              <GenericTimeData genericDataName={'Year of launch'} genericData={filmResult.Year} />
              <GenericTimeData genericDataName={'Runtime'} genericData={filmResult.Runtime} />
              <GenericData genericDataName={'Actors'} genericData={filmResult.Actors} />

              <h4>Rating on IMDb: {filmResult.imdbRating}</h4>
              <h4>Rating in other websites:</h4>
              <ul>
                {
                  filmResult.Ratings.map((rating, index) => {
                    return (
                      <li key={rating.Source}>
                        {rating.Source} {rating.Value}
                      </li>
                    );
                  })
                }
              </ul>
            </main>
          </>
      }
    </>
  )
}
