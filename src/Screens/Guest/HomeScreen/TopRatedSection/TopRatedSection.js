import {
  FlexBox,
  InnerSection,
  Typography,
  FlexRow,
} from "../../../../App.Styles";

import { BorderedBox, BorderText, ColumnContainer } from "../HomeScreen.Styles";
import ProductCard from "../../../../Components/ProductCard/ProductCard";

import Rating from "@material-ui/lab/Rating";
import Button from "../../../../Components/Button/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ButtonContent from "../../../../Components/ButtonContant/ButtonContent";

function TopRatedSection({ topRatedProducts }) {
  return (
    <FlexBox style={{ paddingBottom: "40px" }}>
      <InnerSection>
        <ColumnContainer centerItem>
          <Typography fontWeight={700} fontSize={25}>
            TOP RATE PRODUCTS
          </Typography>
          <BorderText />
        </ColumnContainer>
        <FlexRow>
          {topRatedProducts.map((item) => (
            <ProductCard
              id={item._id}
              key={item._id}
              BackgroundCard={false}
              widthBorder={true}
              borderRadius={true}
              image={"https://proshop-ms.herokuapp.com/" + item.image}
              name={item.name}
              discount={0}
              price={item.price}
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
      </InnerSection>
    </FlexBox>
  );
}

export default TopRatedSection;
