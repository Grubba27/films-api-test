import {useRouter} from "next/router";
import style from "../../styles/Movie.module.css"


export default function GoBack(props) {

  const router = useRouter();
  const goBack = async (url) => {
    await router.push(url);
  }

  return (
    <div>
            <span>
              {props.message}
            </span>
      <br/>
      <button className={style.goButton} onClick={() => goBack(props.url)}>
        Click here to go to the search page
      </button>

    </div>
  )
}
