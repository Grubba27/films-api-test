import {useRouter} from "next/router";
import {useState} from "react";
import style from "../../styles/Movie.module.css"
import FormValidator from "../../public/components/FormValidator";

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

      <div className={style.searchSection}>
        <h1>
          Search a movie :)
        </h1>

          <label htmlFor="movie">Movie Name:</label>
          <input id={'movie'} name={'movie'}
                 required={true}
                 placeholder={'Type the movie name'}
                 type={'text'} value={movieTitle}
                 onInput={e => typeEvent(e)} />
          <button type={'submit'} value={'send'} className={style.goButton} onClick={ () => searchMovie(movieTitle)}>
            Search
          </button>

        <FormValidator isValid={isValid} />
      </div>

    </>

  )
}
