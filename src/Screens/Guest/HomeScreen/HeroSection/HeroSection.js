import {
  Container,
  InnerContainer,
  SideBox,
  HeroBox,
  Image,
  HeroTitle,
} from "./HeroSection.Style";
import { InnerSection } from "../../../../App.Styles";
import SwipeableViews from "react-swipeable-views";
import { Arrow } from "../HomeScreen.Styles";
import Button from "../../../../Components/Button/Button";
import { useState } from "react";
import cart_image from "../../../../Assets/cart_image.png";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: "auto",
    overflow: "hidden",
  },
};

function HeroSection({ sliderProducts }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleChangeIndex = () => {};

  return (
    <Container>
      <InnerContainer>
        <Arrow
          isLeft={true}
          onClick={() => {
            if (sliderIndex === 0) setSliderIndex(2);
            else setSliderIndex(sliderIndex - 1);
          }}
        >
          &#10095;
        </Arrow>
        <InnerSection>
          <SwipeableViews
            style={Object.assign({}, styles.root, styles.root, {})}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
            {sliderProducts.map((item) => (
              <HeroBox key={item._id}>
                <SideBox>
                  <HeroTitle fontSize={25} color={"#242424"}>
                    Save up to ${item.price}
                  </HeroTitle>
                  <HeroTitle fontSize={35} fontWeight={700} fontFamily>
                    {item.name.substring(0, 15)}
                  </HeroTitle>
                  <HeroTitle
                    style={{ width: "550px" }}
                    fontSize={25}
                    color={"#242424"}
                  >
                    {item.description.substring(0, 48)}...
                  </HeroTitle>
                  <Button
                    link={`/product/${item._id}/${item.name}`}
                    text="Shop Now"
                    width={"220px"}
                    height={"52px"}
                    borderRadius={"50px"}
                    style={{
                      margin: "20px 0 50px  0 ",
                      fontWeight: 500,
                      color: "#000",
                      fontFamily: "monospace",
                    }}
                  />
                </SideBox>

                <Image src={cart_image} />
              </HeroBox>
            ))}
          </SwipeableViews>
        </InnerSection>
        <Arrow
          onClick={() => {
            if (sliderIndex === 2) setSliderIndex(0);
            else setSliderIndex(sliderIndex + 1);
          }}
        >
          &#10095;
        </Arrow>{" "}
      </InnerContainer>
    </Container>
  );
}

export default HeroSection;
