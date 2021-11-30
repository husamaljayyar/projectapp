import { BorderLine } from "../../../App.Styles";
import {
  CartList,
  ProceedBox,
  MainContainer,
  InnerContainer,
  TypographyText,
} from "./CartScreen.Styles";
import Navigator from "../../../Components/Navigator/Navigator";
import CartItem from "../../../Components/CartItem/CartItem";
import Button from "../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  decreaseCartItemQty,
  deleteCartItem,
} from "../../../Redux/Cart/cartAction";

const CartScreen = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <MainContainer>
      <Navigator name={"Shopping Cart"} />
      <InnerContainer>
        <CartList>
          {state.cart.cart.map((item) => (
            <CartItem
              increaseCounter={() => {
                if (item.quantity < item.countInStock)
                  // not: countInStock this is quantity = 11
                  // if elemant Existing add 1 on quantity
                  dispatch(addCartItem(item, 1));
              }}
              decreaseCounter={() => {
                if (item.quantity > 1) dispatch(decreaseCartItemQty(item, 1));
              }}
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
              counter={item.quantity}
              handleDelete={() => dispatch(deleteCartItem(item._id))}
            />
          ))}
        </CartList>
        <ProceedBox>
          <TypographyText fontSize={20} fontWeight={500}>
            Subtotal ({state.cart.cart.length}) items
          </TypographyText>
          <TypographyText fontSize={20} fontWeight={500}>
            Total (
            {state.cart.cart.reduce((acc, item) => {
              return acc + item.quantity;
            }, 0)}
            ) items
          </TypographyText>
          <TypographyText fontSize={20} fontWeight={500} MarginBottom>
            Total Price: $
            {state.cart.cart
              .reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0)
              .toFixed(2)}
          </TypographyText>
          <BorderLine />

          <Button
            isOrange
            text={"Proceed to checkout"}
            link={"/proceed-checkout/shipping-address"}
            borderRadius={"10px"}
            width={"100%"}
            height={"50px"}
          />
        </ProceedBox>
      </InnerContainer>
    </MainContainer>
  );
};

export default CartScreen;
