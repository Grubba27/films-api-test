import {CustomP} from "../../styles/MovieStyles";

export default function GenericTimeData(props){

  return(
    <CustomP> {props.genericDataName}:
      <time> {props.genericData} </time>
    </CustomP>

  )
}
