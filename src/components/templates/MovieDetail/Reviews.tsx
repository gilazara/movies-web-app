import { useState } from "react";
import useReviews from "./hooks/useReviews";
import { Grid, Typography } from "@mui/material";
import Paginator from "src/components/common/Paginator";
import ReviewItem from "src/components/common/ReviewItem";

interface Props {
  movieId: string;
}

const Reviews = ({ movieId }: Props) => {
  const [page, setPage] = useState(1);
  const { reviews = [], totalPages } = useReviews(page, movieId);

  return (
    <Grid px={12} pb={8}>
      {reviews.length > 0 && (
        <Grid>
          <Typography variant="h4" color="text.primary">
            Reviews
          </Typography>
          <Grid paddingY={3}>
            {reviews.map((review) => {
              return <ReviewItem key={review.id} review={review} />;
            })}
          </Grid>
        </Grid>
      )}
      <Grid display="flex" justifyContent="center" mt={6}>
        {totalPages > 0 && (
          <Paginator
            count={totalPages}
            onPageChange={(page: number) => setPage(page)}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Reviews;
