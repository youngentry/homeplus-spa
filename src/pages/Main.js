import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "../css/Main.scss";

const SLIDE = [
    { id: 1, content: "1" },
    { id: 2, content: "2" },
    { id: 3, content: "3" },
];

const Main = () => {
    const MS = useRef(null);

    return (
        <div className="Main">
            <div className="mainVisual">
                <div className="container">
                    <Swiper
                        className="mainSlider"
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        ref={MS}
                    >
                        {SLIDE.map((slide) => (
                            <SwiperSlide key={slide.id}>
                                <figure className={"itm0" + slide.id}></figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="arrows">
                        <div onClick={() => MS.current.swiper.slidePrev()}>
                            <i className="xi-arrow-left"></i>
                        </div>
                        <div onClick={() => MS.current.swiper.slideNext()}>
                            <i className="xi-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
