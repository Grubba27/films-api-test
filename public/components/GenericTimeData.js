export default function GenericTimeData(props){

  return(
    <p> {props.genericDataName}:
      <time> {props.genericData} </time>
    </p>

  )
}
