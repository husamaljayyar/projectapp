import { useState } from "react";
import {
  FlexBox,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../../App.Styles";
import { RowContainer } from "./FeaturedProductsSection.Styles";
import SwipeableViews from "react-swipeable-views";
import { ColumnContainer, Dot, BorderText } from "../HomeScreen.Styles";
import ProductCard from "../../../../Components/ProductCard/ProductCard";
import Meta from "../../../../Components/Meta/Meta";

import Rating from "@material-ui/lab/Rating";
import Button from "../../../../Components/Button/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ButtonContent from "../../../../Components/ButtonContant/ButtonContent";

const styles = {
  root: {
    position: "relative",
    width: "100%",
  },
};

function FeaturedProductsSection({ products }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const chunkSize =
    window.innerWidth > 1100 ? 4 : window.innerWidth > 800 ? 2 : 1;
 
  const handleChangeIndex = () => {};

  const getSlides = () => {
    const chunks = [];
    products.map((Product, IndexProduct) => {
      if (IndexProduct % chunkSize === 0) {
        chunks.push([]);
      }
      const firstArrayLength = chunks.length;
      const secondArrayLength = chunks[firstArrayLength - 1].length;
      chunks[firstArrayLength - 1][secondArrayLength] = Product;
      return Product;
    });

    return chunks.map((Product, IndexProduct) => (
      <FlexRow key={IndexProduct}>
        {Product.map((item) => (
          <ProductCard
            BackgroundCard={true}
            key={item._id}
            id={item._id}
            image={"https://proshop-ms.herokuapp.com/" + item.image}
            name={item.name}
            discount={0}
            price={item.price}
            borderRadius={true}
          >
            <Rating
              style={{ color: "#ff8c00", margin: "10px" }}
              name="simple-controlled"
              value={item.rating}
            />

            {item.discount > 0 && (
              <Typography color={"#FC4059"} fontSize={25}>
                $ {item.discount}
              </Typography>
            )}

            <Typography
              fontSize={20}
              fontWeight={700}
              style={{
                textDecoration: item.discount && "line-through",
                marginBottom: "10px",
              }}
            >
              ${item.price}
            </Typography>
            <Button
              text={
                <ButtonContent>
                  <ShoppingCartIcon />
                </ButtonContent>
              }
              width={"100%"}
              height={"40px"}
              borderRadius={"0 0 10px 10px"}
              isGray={true}
              style={{ background: "#f99838", fontSize: "20px" }}
            />
          </ProductCard>
        ))}
      </FlexRow>
    ));
  };

  return (
    <>
      <FlexBox background={"#F7F8FC"}>
        <InnerSection>
          <ColumnContainer centerItem>
            <Typography fontWeight={700} fontSize={25}>
              Featured Products
            </Typography>
            <BorderText />
          </ColumnContainer>
          <SwipeableViews
            style={Object.assign({}, styles.root)}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
            {getSlides()}
          </SwipeableViews>
          <RowContainer>
            {getSlides().map((Product, IndexProduct) => (
              <Dot
                size={14}
                key={IndexProduct}
                isGray={sliderIndex !== IndexProduct}
                onClick={() => {
                  setSliderIndex(IndexProduct);
                }}
              />
            ))}
          </RowContainer>
        </InnerSection>
      </FlexBox>
    </>
  );
}

export default FeaturedProductsSection;
