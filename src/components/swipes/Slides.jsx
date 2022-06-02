import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swipe.css";
import image1 from "./ba/environ.jpg";
import slide2 from "./ba/perso.jpg";
import slide5 from "./ba/young-.jpg";

SwiperCore.use([Pagination, Autoplay]);

const Slides = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        grabCursor={false}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <section
            className="swiper-slide slide"
            style={{
              background: ` linear-gradient(to bottom, rgb(0 0 0 /70%), rgb(0 0 0 / 40%)), url(${image1}) no-repeat `,
            }}
          >
            <div className="content">
              {/* <h3>Thager alrafedain</h3> */}
              <img src="/images-logos/thager-sl-1.png" alt="" />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide"
            style={{
              background: `linear-gradient(to bottom,rgb(0 0 0 /70%), rgb(0 0 0 / 0%)),url(${slide2}) no-repeat`,
            }}
          >
            <div className="content">
              <h3>
                best services provider “Solar energy Today’s resource for a
                brighter tomorrow!”
              </h3>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide slide3"
            style={{
              background: `linear-gradient(to bottom, rgb(0 0 0 / 70%), rgb(0 0 0 / 40%)),url(${slide5}) no-repeat`,
            }}
          >
            <div className="content3">
              <h3>
                Don’t wait to check <br />
                out our New products
              </h3>
              <a href="#" className="btna">
                get started
              </a>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
