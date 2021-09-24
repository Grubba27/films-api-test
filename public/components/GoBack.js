import {useRouter} from "next/router";
import {CenteredColumnSection, GoButton} from "../../styles/MovieStyles";


export default function GoBack(props) {

  const router = useRouter();
  const goBack = async (url) => {
    await router.push(url);
  }

  return (
    <>
      <title>
        Not found
        <meta name={"theme-color"} content={"#15202B"}/>
      </title>
    <CenteredColumnSection>
            <span>
              {props.message}
            </span>
      <br/>
      <GoButton onClick={() => goBack(props.url)}>
        Click here to go to the search page
      </GoButton>

    </CenteredColumnSection>
    </>

  )
}
