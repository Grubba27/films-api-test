import {useRouter} from "next/router";
import {useState} from "react";
import style from "../../styles/Movie.module.css"
import FormValidator from "../../public/components/FormValidator";
import {SimpleTitle} from "../index";
import styled from "@emotion/styled";


const GoButton = styled.button`
  margin-top: 5px;
  border-radius: 15px;
`;

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
      <SimpleTitle>
        Movie Searcher
      </SimpleTitle>

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
          <GoButton type={'submit'} value={'send'} onClick={ () => searchMovie(movieTitle)}>
            Search
          </GoButton>

        <FormValidator isValid={isValid} />
      </div>

    </>

  )
}
