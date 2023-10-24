import instance from "src/api/instance";
import { IActor, MediaType } from "src/api/interfaces";

interface CreditsResponse {
  id: number;
  cast: IActor[];
}

const getCredits = async (type: MediaType, movieId: string) => {
  const { data } = await instance.get<CreditsResponse>(
    `${type}/${movieId}/credits`
  );

  return data;
};

export default getCredits;
