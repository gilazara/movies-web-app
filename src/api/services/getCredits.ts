import instance from "src/api/instance";

interface CreditsResponse {
  cast: any;
  crew: any;
}

const getCredits = async (movieId: number) => {
  const { data } = await instance.get<CreditsResponse>(
    `movie/${movieId}/credits`
  );

  return data;
};

export default getCredits;
