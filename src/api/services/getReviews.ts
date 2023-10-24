import instance from "src/api/instance";
import { IReview, MediaType } from "src/api/interfaces";

interface ReviewsResponse {
  id: number;
  page: number;
  results: IReview[];
  total_pages: number;
}

const getReviews = async (type: MediaType, page: number, movieId: string) => {
  const { data } = await instance.get<ReviewsResponse>(
    `${type}/${movieId}/reviews?page=${page}`
  );

  return data;
};

export default getReviews;
