import {
  RateBox,
  ReviewTitle,
  TextReviewDate,
  TextReviewDescription,
  ContainerReview,
} from "./Review.Styles";
import Rating from "@material-ui/lab/Rating";

const Review = ({ title, text, rate, icon, date, isOdd }) => {
  return (
    <ContainerReview isOdd={isOdd} >
      <RateBox>
        <ReviewTitle>{title}</ReviewTitle>
        <Rating name="simple-controlled" value={rate} />
      </RateBox>
      <TextReviewDescription>{text}</TextReviewDescription>
      <TextReviewDate>{date.slice(1, 50)}</TextReviewDate>

    </ContainerReview>
  );
};

export default Review;
