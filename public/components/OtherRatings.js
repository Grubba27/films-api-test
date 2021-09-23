export default function OtherRatings(props) {
  return(
    <ul>
      {
        props.ratings.map((rating, index) => {
          return (
            <li key={rating.Source}>
              {rating.Source} {rating.Value}
            </li>
          );
        })
      }
    </ul>
  )
}
