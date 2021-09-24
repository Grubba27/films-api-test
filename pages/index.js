
import {useRouter} from "next/router";
import {useEffect} from "react";
import GoBack from "../public/components/GoBack";
import styled from "@emotion/styled";

export const SimpleTitle = styled.title``;
export default function Home() {
  const router = useRouter()

  useEffect(() => {
    async function redirectOnInit() {
      await router.push('/filmes');
    }
    redirectOnInit();
  })
  return (<>
    <SimpleTitle>
      Movie Searcher
    </SimpleTitle>
      <GoBack message={'If something has not happened click'} url={'/filmes'} />
    </>
  )
}
