import { FlexColumn, FlexRow, Typography } from "../../../App.Styles";
import {
  ContentReviews,
  ContainerCol,
  StyledTextArea,
  InnerContainerCol,
} from "./Product.Styles";
import {
  ErrorMessage,
  SuccessMessage,
} from "../../User/Payment/Payment.Styles";
import Button from "../../../Components/Button/Button";
import Review from "../../../Components/Review/Review";
import Rating from "@material-ui/lab/Rating";
import { addReviewAction } from "../../../Redux/User/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useLocation } from "react-router";
import { useLocationWithQuery } from "react-router-query-hooks";

export default function ProductReviews(props) {
  const location = useLocation();
  const product = props.product;
  const locationQuery = useLocationWithQuery();
  const {
    query: { review: reviewFromQuery, rating: ratingFromQuery },
  } = locationQuery;
  const [rating, setRating] = useState(ratingFromQuery ? ratingFromQuery : 0);
  const [review, setReview] = useState(reviewFromQuery ? reviewFromQuery : "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <FlexColumn>
      {/* existing reviews in case */}
      {product.product?.reviews?.length > 0 && (
        <FlexColumn style={{ alignItems: "center" }}>


          <ContainerCol>
          <Typography fontSize={28} fontWeight={700} Padding>
            Reviews
          </Typography>
            <InnerContainerCol>
              <Typography
                fontSize="22"
                fontWeight="500"
                style={{ margin: "30px 0 0 0", justifyContent: "start" }}
              >
                {" "}
                Add Review
              </Typography>
              <StyledTextArea
                type="text"
                placeholder={"Comment..."}
                required={true}
                onChange={(e) => setReview(e.target.value)}
                value={review}
              />
              <Rating
                style={{ margin: "0 10px 20px" }}
                onChange={(e, value) => {
                  setRating(value);
                }}
                value={rating}
                defaultValue={props.rate}
                name="simple-controlled"
              />
              {error && <ErrorMessage>{error}</ErrorMessage>}
              {state?.userDetails?.addingReview?.error && (
                <ErrorMessage>
                  {state?.userDetails?.addingReview?.error}
                </ErrorMessage>
              )}
              {state?.userDetails?.addingReview?.success && (
                <SuccessMessage>
                  {state?.userDetails?.addingReview?.success}
                </SuccessMessage>
              )}
              <FlexRow style={{ justifyContent: "start" }}>
                <Button isOrange
                  text={"Submit"}
                  width={"150px"}
                  height={"45px"}
                  borderRadius={"10px"}
                  link={
                    state.userDetails.user.name
                      ? `/login?pathname=${location.pathname}&rating=${rating}&review=${review}`
                      : ""
                  }
                  onClick={
                    state?.userDetails.user.name
                      ? () => {
                          dispatch(
                            addReviewAction(
                              {
                                comment: review,
                                rating,
                              },
                              product.product._id
                            )
                          );

                          if (review && rating) {
                          } else
                            setError("Please write a comment and add rating");
                        }
                      : () => {}
                  }
                  isLoading={state?.userDetails?.addingReview?.isLoading}
                />
              </FlexRow>
            </InnerContainerCol>

            <ContentReviews >
              {product.product?.reviews?.map((item, idx) => (
                <Review 
                  isOdd={idx % 2 !== 0}
                  title={item.name}
                  text={item.comment}
                  date={item.createdAt}
                  rate={item.rating}
                />
              ))}
            </ContentReviews>
          </ContainerCol>
        </FlexColumn>
      )}
    </FlexColumn>
  );
}
