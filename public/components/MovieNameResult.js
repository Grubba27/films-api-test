import MainMovieSection from "./MainMovieSection";

export default function MovieNameResult({filmResult, siteRatings}){
  return(
    <>
      <title>
        {filmResult.Title || 'Not found'}
      </title>
      <MainMovieSection filmResult={filmResult} siteRatings={siteRatings} />
    </>
  )
}
