import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider() {
  return (
    <Swiper loop={true} autoplay={{ delay: 2000 }}>
      <SwiperSlide>
        <img src="/img1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img3.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}
