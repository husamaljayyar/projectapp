import { Typography } from "../../App.Styles";
import { useState } from "react";
import {
  NavbarContainer,
  InnerNav,
  NavBox,
  InputText,
  ButtonNav,
  SpanNav,
  Icon,
  SearchIconNav,
  StyledLink,
  StyledBox,
  StyledBoxForMobile,
  MobileMenu,
  CloseDiv,
} from "./NavBar.Styles";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../Redux/User/userActions";
import { MenuOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { useLocationWithQuery } from "react-router-query-hooks";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import StorefrontIcon from "@material-ui/icons/Storefront";

export default function Navbar() {
  const Style = {
   fontSize: 22,
    color: "#FFF",
    fill: "#FFF",
  };
  const locationQuery = useLocationWithQuery();
  const {
    query: { keyword },
  } = locationQuery;

  const [value, setValue] = useState(keyword ? keyword : "");
  const dispatch = useDispatch();
  const history = useHistory();

  const state = useSelector((state) => state);

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const handleOpenMenu = () => {
    setIsMenuOpened(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpened(false);
  };
  return (
    <>
      {isMenuOpened && (
        <MobileMenu>
          <CloseDiv color={"#242424"} as={"div"} onClick={handleCloseMenu}>
            x
          </CloseDiv>
          <Icon to={state.userDetails.user._id ? "/profile" : "/login"}>
            <PersonIcon style={Style} />
            {state.userDetails.user._id ? (
              <Typography fontSize={"10px"} color={"#fff"}>
                Profile
              </Typography>
            ) : (
              <Typography fontSize={"10px"} color={"#fff"}>
                Login / Sign up
              </Typography>
            )}
          </Icon>

          <Icon to={"/cart"}>
            <span>{state.cart.cart.length}</span>
            <ShoppingCartIcon
              style={{ ...Style, transform: "translate(0, -4px)" }}
            />
            <Typography
              fontSize={"10px"}
              color={"#fff"}
              style={{
                transform: "translate(0, -4px)",
              }}
            >
              Cart
            </Typography>
          </Icon>
          {state.userDetails.user._id && (
            <Icon
              onClick={() => {
                dispatch(logoutAction());
                localStorage.removeItem("user");
              }}
            >
              <ExitToAppIcon style={Style} />
              <Typography fontSize={"10px"} color={"#fff"}>
                Logout
              </Typography>
            </Icon>
          )}
        </MobileMenu>
      )}

      <NavbarContainer>
        <InnerNav >
          <NavBox>
            <StyledLink to={"/"}>
              <SpanNav Color>
                <StorefrontIcon fontSize="inherit" />
              </SpanNav>
            </StyledLink>
          </NavBox>

          <NavBox
            style={{
              borderRadius: "100px",
              width: "33%",
              minWidth: 250,
              position: "relative",
              
            }}
          >
            <InputText
              type="text"
              value={value}
              placeholder="Search"
              onChange={(e) => setValue(e.target.value)}
            />
            <ButtonNav
              style={{ position: "absolute", right: "0px", color: "#000" }}
              onClick={() => {
                history.push(`/search${value ? `?keyword=${value}` : ""}`);
              }}
            >
              <SearchIconNav />
            </ButtonNav>
          </NavBox>

          <StyledBox >
            <Icon to={state.userDetails.user._id ? "/profile" : "/login"}>
              <PersonIcon style={Style} />
              {state.userDetails.user._id ? (
                <Typography fontSize={"10px"} color={"#fff"}>
                  Profile
                </Typography>
              ) : (
                <Typography fontSize={"10px"} color={"#fff"}>
                  Login / Sign up
                </Typography>
              )}
            </Icon>

            <Icon to={"/cart"}>
              <span>{state.cart.cart.length}</span>
              <ShoppingCartIcon
                style={{ ...Style, transform: "translate(0, -4px)" }}
              />
              <Typography
                fontSize={"10px"}
                color={"#fff"}
                style={{
                  transform: "translate(0, -4px)",
                }}
              >
                Cart
              </Typography>
            </Icon>
            {state.userDetails.user._id && (
              <Icon
                onClick={() => {
                  dispatch(logoutAction());
                  localStorage.removeItem("user");
                }}
              >
                <ExitToAppIcon style={Style} />
                <Typography fontSize={"13px"} color={"#fff"}>
                  Logout
                </Typography>
              </Icon>
            )}
          </StyledBox>
          <StyledBoxForMobile>
            <MenuOutlined style={Style} onClick={handleOpenMenu} />
          </StyledBoxForMobile>
        </InnerNav>
      </NavbarContainer>
    </>
  );
}
