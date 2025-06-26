"use client"

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function PartnersSection() {
  return (
    <section className="container partner-style-2 wow fadeIn">
      <div className="row pb-5">
        <div className="col-12 wow fadeInUp" style={{ marginTop: "5%" }}>
          <div className="counter-title text-center">
            <h2>
              Courses tailored to <span> all of following </span> curriculums
            </h2>
          </div>
        </div>
        <div
          className="col-xl-12 mx-auto"
          style={{ marginTop: "0%", paddingTop: "0px" }}
        >
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            centeredSlides={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            className="mx-auto partners"
          >
            <SwiperSlide>
              <a href="#">
                <Image
                  src="/assets/img/partners/dark/1.png"
                  alt="client"
                  width={140}
                  height={40}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  src="/assets/img/partners/dark/2.jpg"
                  alt="client"
                  width={140}
                  height={69}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  src="/assets/img/partners/dark/3.png"
                  alt="client"
                  width={140}
                  height={61}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  src="/assets/img/partners/dark/4.jpg"
                  alt="client"
                  width={140}
                  height={75}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  src="/assets/img/partners/dark/5.svg"
                  alt="client"
                  width={136}
                  height={40}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  src="/assets/img/partners/dark/5.png"
                  alt="client"
                  width={140}
                  height={40}
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  src="/assets/img/partners/dark/2.svg"
                  alt="client"
                  width={140}
                  height={34}
                />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}