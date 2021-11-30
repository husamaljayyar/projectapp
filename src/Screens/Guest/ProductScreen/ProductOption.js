import {
  Typography,
  ContainerCount,
  RIcon,
  TypographyCount,
} from "../../../App.Styles";
import {
  HeroSection,
  Image,
  ColumnContent,
  RowContainer,
  InnerColumnContent,
  Row,
  ButtonColor,
  InerRowContainer,
} from "./Product.Styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Button from "../../../Components/Button/Button";
import { addCartItem } from "../../../Redux/Cart/cartAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useLocationWithQuery } from "react-router-query-hooks";

const styleButton = {
  marginRight: 13,
  border: "1px solid #FCDD06",
};

function ProductOption(props) {
  const product = props.product;

  const locationQuery = useLocationWithQuery();
  const {
    query: { review: reviewFromQuery, rating: ratingFromQuery },
  } = locationQuery;

  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  return (
    <>
      <HeroSection>
        <ColumnContent Width={"30%"}>
          <Image
            src={"https://proshop-ms.herokuapp.com/" + product.product.image}
          />
        </ColumnContent>

        <ColumnContent Width={"70%"}>
          <RowContainer>
            <InnerColumnContent>
              <Row PaddingBottom>
                <Typography fontSize={25} fontWeight={700}>
                  {product.product.name}
                </Typography>
                <Typography fontSize={25} fontWeight={900}>
                  ${product.product.price}
                </Typography>
              </Row>
              <ContainerCount MarginTop style={{ marginBottom: "40px" }}>
                <RIcon
                  onClick={() => {
                    if (count > 1) setCount(count - 1);
                  }}
                >
                  <RemoveIcon />
                </RIcon>
                <TypographyCount fontWeight={700} fontSize={24}>
                  {count}
                </TypographyCount>

                <RIcon
                  onClick={() => {
                    if (count < product.product.countInStock)
                      setCount(count + 1);
                  }}
                >
                  <AddIcon />
                </RIcon>
              </ContainerCount>

              <RowContainer>
                <InerRowContainer>
                  <ButtonColor background={"#6d726d"} />
                  <ButtonColor background={"#000000"} />
                  <ButtonColor background={"#52be68"} />
                </InerRowContainer>

                <InerRowContainer>
                  <Button isOrange
                    text={<BookmarkBorderIcon />}
                    width={"50px"}
                    height={"45px"}
                    borderRadius={"10px"}
                    style={styleButton}
                  />
                  <Button isOrange
                    text="Add to cart"
                    width={"200px"}
                    height={"45px"}
                    borderRadius={"10px"}
                    disabled={product.product.countInStock}
                    link={"/cart"}
                    onClick={() => {
                      if (product.product.countInStock)
                        dispatch(addCartItem(product.product, count));
                    }}
                  />
                </InerRowContainer>
              </RowContainer>
            </InnerColumnContent>
          </RowContainer>

          <Typography
            fontSize={16}
            fontWeight={500}
            color={"#707070"}
            style={{ textAlign: "center" }}
            Padding
          >
            {product.product.description}
          </Typography>
        </ColumnContent>
      </HeroSection>
    </>
  );
}

export default ProductOption;
