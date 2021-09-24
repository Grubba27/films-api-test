import OtherRatings from "./OtherRatings";

import {CustomH4} from "../../styles/MovieStyles";


export default function RatingsSection(props){

  return(
    <div>
      <CustomH4>Rating on IMDb: {props.imdb}</CustomH4>
      <CustomH4>Rating in other websites:</CustomH4>
      <OtherRatings ratings={props.siteRatings} />
    </div>
  )
}
