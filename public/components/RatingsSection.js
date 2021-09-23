import OtherRatings from "./OtherRatings";

export default function RatingsSection(props){

  return(
    <>
      <h4>Rating on IMDb: {props.imdb}</h4>
      <h4>Rating in other websites:</h4>
      <OtherRatings ratings={props.siteRatings} />
    </>
  )
}
