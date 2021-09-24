export default function FilmSynopsis(props){
  return(
    <article>
      <h3>{props.Title} Synopsis</h3>
      <p>{props.Plot}</p>
    </article>
  )
}
