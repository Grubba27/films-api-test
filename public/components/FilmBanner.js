export default function FilmBanner(props){

  return(
    <>
      <h2>
        {props.title}
        {
          // usando img pois não sei onde todas as images estão hospedadas
          // se soubesse onde está o dominio de todas elas.
          // eu usaria o Image do /next e passaria a url no next.config.js
        }
      </h2>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={`${props.title} poster`} src={props.posterUrl}/>
    </>
  )
}
