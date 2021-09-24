
import {useRouter} from "next/router";
import {useEffect} from "react";
import GoBack from "../public/components/GoBack";


export default function Home() {
  const router = useRouter()

  useEffect(() => {
    async function redirectOnInit() {
      await router.push('/filmes');
    }
    redirectOnInit();
  })
  return (<>

    <title>
      Movie Searcher
      <meta name={"theme-color"} content={"#15202B"}/>
    </title>
      <GoBack message={'If something has not happened click'} url={'/filmes'} />
    </>
  )
}
