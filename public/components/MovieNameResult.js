import MainMovieSection from "./MainMovieSection";

export default function MovieNameResult({filmResult, siteRatings}){
  return(
    <>
      <title>
        {filmResult.Title}
        <meta name={"theme-color"} content={"#15202B"}/>
      </title>
      <MainMovieSection filmResult={filmResult} siteRatings={siteRatings} />
    </>
  )
}
