import {useRouter} from "next/router";
import {useState} from "react";
import FormValidator from "../../public/components/FormValidator";

import {CenteredColumnSection, GoButton} from "../../styles/MovieStyles";




export default function Filmes() {

  const [movieTitle, setMovieTitle] = useState('');

  const [isValid, setIsValid] = useState(true);
  const router = useRouter();


  const searchMovie = async (movieTitle) => {
    if (movieTitle){
      await router.push(`/filmes/${movieTitle}`);
    } else {
      setIsValid(false);
    }
  }

  const typeEvent = (event) => {
    setMovieTitle(event.currentTarget.value);
    setIsValid(true);
  }
  return(
    <>
      <title>
        Movie Searcher
      </title>

      <CenteredColumnSection>
        <h1>
          Search a movie :)
        </h1>

          <label htmlFor="movie">Movie Name:</label>
          <input id={'movie'} name={'movie'}
                 required={true}
                 placeholder={'Type the movie name'}
                 type={'text'} value={movieTitle}
                 onInput={e => typeEvent(e)} />
          <GoButton type={'submit'} value={'send'} onClick={ () => searchMovie(movieTitle)}>
            Search
          </GoButton>

        <FormValidator isValid={isValid} />
      </CenteredColumnSection>

    </>

  )
}
