
import { ContainerData } from "./Ui/ContainerData";

const SingleValue = (props) => {
    return (
        <ContainerData>
        <p>{props.title}</p>
        <p>{props.value}</p>
        </ContainerData>
      );
}
 
export default SingleValue;
