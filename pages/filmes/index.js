import {useRouter} from "next/router";
import {useState} from "react";

export default function Filmes() {

  const [movieTitle, setMovieTitle] = useState('');

  const router = useRouter();


  const searchMovie = async (movieTitle) => {
    await router.push(`/filmes/${movieTitle}`);
  }

  return(
    <>
      <title>
        Movie Searcher
      </title>
      <h1>
        Search a movie :) It is used OMdb api
      </h1>
      <input value={movieTitle} onInput={e => setMovieTitle(e.currentTarget.value)} />
      <button onClick={ () => searchMovie(movieTitle)}>
        Search
      </button>
    </>

  )
}
