import { Grid } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { IActor } from "src/api/interfaces";
import Slider from "src/components/UI/Slider";
import ActorCard from "src/components/common/ActorCard";
import SliderWrapper from "src/components/UI/SliderWrapper";

interface Props {
  cast: IActor[];
}

const Cast = ({ cast }: Props) => {
  return (
    <Grid>
      {cast?.length > 0 && (
        <Grid>
          <SliderWrapper type="Actors">
            <Slider>
              {cast?.map((actor: IActor) => {
                return (
                  <SwiperSlide key={actor.id}>
                    <ActorCard
                      name={actor.name}
                      src={actor.profile_path}
                      ranking={actor.popularity}
                      character={actor.character}
                    />
                  </SwiperSlide>
                );
              })}
            </Slider>
          </SliderWrapper>
        </Grid>
      )}
    </Grid>
  );
};

export default Cast;
