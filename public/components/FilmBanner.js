import style from "../../styles/Movie.module.css"

export default function FilmBanner(props){

  return(
    <div className={style.bannerMainSection}>

      <div className={style.bannerPosterSection} >
        <h2>
          {props.title}
        </h2>
        {
          // usando img pois não sei onde todas as images estão hospedadas
          // se soubesse onde está o dominio de todas elas.
          // eu usaria o Image do /next e passaria a url no next.config.js
        }
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={`${props.title} poster`} src={props.posterUrl}/>
      </div>
      <div className={style.bannerChildrenSection}>
      {props.children}
      </div>

    </div>
  )
}
