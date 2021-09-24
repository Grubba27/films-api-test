import {CheckValidator} from "../../styles/MovieStyles";

export default function FormValidator(props) {

  return (
    <>
      {
        props.isValid ? false :
          <CheckValidator >
              Please, type a value to search
          </CheckValidator>
      }
    </>

  )
}
