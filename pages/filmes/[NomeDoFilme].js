import secrets from '../../../secrets.json';
import axios from "axios";
import {useEffect, useState} from "react";
import GoBack from "../../public/components/GoBack";
import MovieNameResult from "../../public/components/MovieNameResult";

export async function getServerSideProps({query}) {
  // get id of the url || pegar o nome do filme via url
  const {NomeDoFilme} = query;
  // get API key from env || usar as keys que estão no arquivo secrets.json
  const apiKey = secrets.API_KEY;

  const response = await axios(
    {
      method: 'get',
      url: `https://www.omdbapi.com/?t=${NomeDoFilme}&apikey=${apiKey}&plot=full`
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

  const [siteRatings, setSiteRatings] = useState(filmResult.Ratings);

  return (
    <>
      {
        filmResult.Error  ?
          <GoBack message={filmResult.Error} url={'/filmes'}/>
          :
          <MovieNameResult filmResult={filmResult} siteRatings={siteRatings} />
      }
    </>
  )
}
