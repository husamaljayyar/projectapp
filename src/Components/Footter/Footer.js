import { FooterSection, TextFooter, IneerFooterSection } from "./Fotter.Style";
import { InnerSection, FlexRow, FlexColumn } from "../../App.Styles";

export default function Footer() {
  return (
    <FooterSection>
      <IneerFooterSection>
        <FlexColumn style={{ width: "30%", height: "100%" }}>
          <TextFooter color={"#fff"}> Cart</TextFooter>
          <TextFooter color={"#fff"}> Login</TextFooter>
          <TextFooter color={"#fff"}> Sign up</TextFooter>
        </FlexColumn>

        <FlexColumn style={{ background: "#1E1D1D", height: "100%" }}>
          <TextFooter color={"#fff"}> TOP RATE PRODUCTS</TextFooter>
          <TextFooter color={"#fff"}> Featured Products</TextFooter>
        </FlexColumn>
        <FlexRow>
          <TextFooter color={"#fff"}> All rights reserved © 2021</TextFooter>
        </FlexRow>
      </IneerFooterSection>
    </FooterSection>
  );
}
