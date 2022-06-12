import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swipe.css";
import { EffectFade } from "swiper";

// backgrounds
import image1 from "./bg/bg1.jpg";
import image2 from "./bg/bg2.jpg";
import image3 from "./bg/bg3.jpg";
import image4 from "./bg/bg4.jpg";
import image5 from "./ba/environ.jpg";
import { useIsVisible } from "react-is-visible";

SwiperCore.use([Pagination, Autoplay]);

const Slides = () => {
  const nodeRef1 = useRef();
  const nodeRef2 = useRef();
  const nodeRef11 = useRef();
  const isVisible11 = useIsVisible(nodeRef11);
  const isVisible1 = useIsVisible(nodeRef1);
  const isVisible2 = useIsVisible(nodeRef2);
  console.log(isVisible11);
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
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <section
            className="swiper-slide slide"
            style={{
              background: ` linear-gradient(to bottom, rgb(0 0 0 /70%), rgb(0 0 0 / 0%)), url(${image1}) no-repeat `,
            }}
          >
            <div className="content1">
              {/* <h3>Thager alrafedain</h3> */}
              <img
                src="/images-logos/thager-sl-1.png"
                alt=""
                className={isVisible11 && "animate11"}
              />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide"
            style={{
              background: `linear-gradient(to bottom,rgb(0 0 0 /0%), rgb(0 0 0 / 0%)),url(${image2}) no-repeat`,
            }}
          >
            <div className="content content2" ref={nodeRef1}>
              <h3 className={isVisible1 ? "animate21 " : "sl2-hd"}>
                <span style={{ color: "gold" }}>best services provider</span>
              </h3>
              <h3 className={isVisible1 ? "animate22" : "sl2-bd"}>
                <br /> “Solar energy, Today’s resource for a brighter tomorrow!”
              </h3>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            className="swiper-slide slide "
            style={{
              background: `linear-gradient(to bottom, rgb(0 0 0 / 20%), rgb(0 0 0 / 20%)),url(${image3}) no-repeat`,
            }}
          >
            <div className="content content3" ref={nodeRef2}>
              <h3 className={isVisible2 && "animate3"}>
                We work with companies around the world to provide customized
                renewable energy solutions.
              </h3>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide "
            style={{
              background: `linear-gradient(to bottom, rgb(0 0 0 / 30%), rgb(0 0 0 / 30%)),url(${image4}) no-repeat`,
            }}
          >
            <div className="content">
              <h3>
                Don’t wait to check <br />
                out our New products
              </h3>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className="swiper-slide slide "
            style={{
              background: `linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 20%)),url(${image5}) no-repeat`,
            }}
          >
            <div className="content">
              <h3>
                leaders in the development, distribution and supply of solar
                energy services and solutions.
              </h3>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
