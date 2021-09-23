import styled from "styled-components";


export default function FilmSynopsis(props){
  return(
    <article>
      <h3>{props.Title} Synopsis / Plot</h3>
      <p>{props.Plot}</p>
    </article>
  )
}
