
import {BannerMainSection, CenteredColumnSection} from "../../styles/MovieStyles";

export default function FilmBanner(props){

  return(
    <BannerMainSection>

      <CenteredColumnSection>
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
      </CenteredColumnSection>
      <CenteredColumnSection style={{padding: "0 1rem"}}>
      {props.children}
      </CenteredColumnSection>

    </BannerMainSection>
  )
}
