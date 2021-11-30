import { SpinnerContainer } from "../../../App.Styles";
import {
  InnerContainer,
  ContentBackTitle,
  BackTitle,
  MainContainer,
} from "./Product.Styles";
import FeaturedProductsSection from "../HomeScreen/FeaturedProductsSection/FeaturedProductsSection";
import {
  getFeaturedProducts,
  getProduct, // get Product by id
} from "../../../Redux/Guest/guestActions";
import {
  ADD_REVIEW_RESET,
  ADD_REVIEW_TO_PRODUCT,
} from "../../../Redux/User/userTypesConstants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useLocationWithQuery } from "react-router-query-hooks";
import Meta from "../../../Components/Meta/Meta";
import ProductOption from "./ProductOption";
import ProductReviews from "./ProductReviews";

const ProductScreen = (props) => {
  const locationQuery = useLocationWithQuery();
  const {
    query: { review: reviewFromQuery, rating: ratingFromQuery },
  } = locationQuery;

  const [count, setCount] = useState(1);
  const [rating, setRating] = useState(ratingFromQuery ? ratingFromQuery : 0);
  const [review, setReview] = useState(reviewFromQuery ? reviewFromQuery : "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  const history = useHistory();
  const product = state.guestState.product;

  // page back
  const goBack = () => {
    history.goBack();
  };
  useEffect(() => {
    dispatch({
      type: ADD_REVIEW_RESET,
    });
    dispatch(getFeaturedProducts());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  useEffect(() => {
    if (state?.userDetails?.addingReview?.success) {
      dispatch({
        type: ADD_REVIEW_TO_PRODUCT,
        payload: {
          comment: review,
          rating,
          createdAt: new Date().toString(),
          name: state?.userDetails.user.name,
        },
      });
      setError("");
      setReview("");
      setRating(0);
    }
  }, [
    dispatch,
    rating,
    review,
    state?.userDetails?.addingReview?.success,
    state?.userDetails.user.name,
  ]);

  console.log(props.location.pathname, "props.location.pathname");

  return state.guestState.isLoading || product.isLoading ? (
    <SpinnerContainer />
  ) : (
    <>
      <Meta
        title={product.product.name}
        description={product.product.description}
      />
      <MainContainer>
        <InnerContainer>
          <ContentBackTitle>
            <BackTitle onClick={goBack}>Back</BackTitle>/
            <BackTitle Color>{product.product.name}</BackTitle>
          </ContentBackTitle>

          <ProductOption product={product} />
          <ProductReviews product={product} />
        </InnerContainer>
        <FeaturedProductsSection products={state.guestState.products} />
      </MainContainer>
    </>
  );
};

export default ProductScreen;
