import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import useReviews from "./hooks/useReviews";
import ReviewItem from "src/components/common/ReviewItem";

const Reviews = ({ movieId }: { movieId: string }) => {
  const [page, setPage] = useState(1);
  const { reviews = [] } = useReviews(page, movieId);
  console.log(`reviews:`, reviews);

  return (
    <Grid px={12} py={6}>
      {reviews.length > 0 && (
        <Grid>
          <Typography variant="h4" color="text.primary">
            Reviews
          </Typography>
          <Grid paddingY={3}>
            {reviews.map((review) => {
              return <ReviewItem review={review} />;
            })}
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Reviews;
