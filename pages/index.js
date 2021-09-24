
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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <title>
      Movie Searcher
    </title>
      <GoBack message={'If something has not happened click'} url={'/filmes'} />
    </>
  )
}
