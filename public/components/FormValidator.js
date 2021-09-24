import style from "../../styles/Movie.module.css";

export default function FormValidator(props) {

  return (
    <>
      {
        props.isValid ? false :
          <span className={style.validityCheck}>
              Please, type a value to search
          </span>
      }
    </>

  )
}
