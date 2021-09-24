import GenericTimeData from "./GenericTimeData";
import RatingsSection from "./RatingsSection";
import {FlexStartColumnSection, SpecSection} from "../../styles/MovieStyles";

export default function FilmSpec({filmResult, siteRatings}){

  return(
    <SpecSection>
      <FlexStartColumnSection>
        <GenericTimeData genericDataName={'Year of launch'} genericData={filmResult.Year} />
        <GenericTimeData genericDataName={'Runtime'} genericData={filmResult.Runtime} />
      </FlexStartColumnSection>

      <RatingsSection imdb={filmResult.imdbRating} siteRatings={siteRatings} />
    </SpecSection>
  )
}
