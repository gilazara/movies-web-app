import { useRef } from "react";
import { Swiper, SwiperClass } from "swiper/react";

interface Props {
  children: React.ReactNode;
}

const Slider = ({ children }: Props) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        660: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        1080: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1650: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
