import { Title, SpanTextBack } from "./Navigator.Style";
import { useHistory } from "react-router";
 

const Navigator = (props) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <Title>
      <SpanTextBack onClick={goBack}>Back</SpanTextBack>/{props.name}
    </Title>
  );
};
export default Navigator;
