import { CardContainer, CardImage } from "./ProductCard.Styles";
import { FlexColumn, Typography } from "../../App.Styles";



function ProductCard(props) {
  return ( 
    <CardContainer
      BackgroundCard={props.BackgroundCard}
      widthBorder={props.widthBorder}
      borderRadius={props.borderRadius}

      to={`/product/${props.id}/${props.name}`}
    >
      <CardImage  ImageBorderRadius={props.borderRadius} src={props.image} alt={props.name} />
      <FlexColumn>
        <Typography
          fontSize={18}
          style={{ textAlign: "center", margin: "10px" }}
        >
          {props.name}
        </Typography> 
        {props.children}
      </FlexColumn>
    </CardContainer>
  );
}

export default ProductCard;
