"use client";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
export default function Gallery() {
  return (
    <>
      {/* Gallery Section */}
      <section id="gallery" className="gallery section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <p>
            <span className="description-title">Không gian </span>
          </p>{" "}
          <h2> Không gian tại Sincay</h2>
        </div>
        {/* End Section Title */}

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <Image src="/img/gallery/gallery-1.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-2.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-3.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-4.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-5.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-1.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-2.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-3.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/img/gallery/gallery-4.jpg" className="img-fluid" alt="" width={450} height={400} />
          </SwiperSlide>
        </Swiper>


      </section>
    </>
  );
}
