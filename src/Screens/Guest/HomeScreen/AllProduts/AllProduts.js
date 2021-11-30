import ProductCard from "../../../../Components/ProductCard/ProductCard";
import { RowContainer } from "./AllProduts.Style";
import { FlexColumn } from "../../../../App.Styles";

function AllProduts({ products }) {
  return (
    <FlexColumn style={{ paddingBottom: "40px" }}>
      <RowContainer>
        {products.map((item) => (
          <ProductCard
            id={item._id}
            key={item._id}
            BackgroundCard={false}
            widthBorder={true}
            borderRadius={false}
            image={"https://proshop-ms.herokuapp.com/" + item.image}
            name={item.name}
            discount={0}
            price={item.price}
            rate={item.rating}
          ></ProductCard>
        ))}
      </RowContainer>
    </FlexColumn>
  );
}

export default AllProduts;
