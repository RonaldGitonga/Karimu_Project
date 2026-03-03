"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div className="container-fluid hero-container" data-aos="fade-up">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 content-col">
            <div className="content-wrapper">
              <h2 style={{ fontFamily: "var(--heading-font)" }}>Curated Hospitality, Rooted in Intention</h2>
              <p style={{ fontFamily: "var(--default-font)", fontSize: "1.15rem", fontWeight: 300, lineHeight: "1.8" }}>
                The Karimu experience brings people together through thoughtful hosting, refined food, and meaningful connection.
                <br /><br />
                <span style={{ fontStyle: "italic", color: "var(--accent-color)" }}>The Art of Generosity, Refined.</span>
              </p>

              <div className="btn-group mt-4">
                <Link href="#experiences" className="btn btn-book">
                  Explore Gatherings
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 swiper-col">
            <div className="hero-swiper" data-aos="zoom-out" data-aos-delay="100" style={{ position: "relative" }}>
              <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                loop={true}
                speed={800}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                slidesPerView={1}
                navigation={{
                  nextEl: ".hero-swiper-button-next",
                  prevEl: ".hero-swiper-button-prev",
                }}
              >
                <SwiperSlide>
                  <div className="img-container">
                    <Image src="/assets/img/restaurant/misc-square-1.webp" alt="Restaurant Ambience" width={800} height={800} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-container">
                    <Image src="/assets/img/restaurant/misc-square-2.webp" alt="Signature Dish" width={800} height={800} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="img-container">
                    <Image src="/assets/img/restaurant/misc-square-3.webp" alt="Expert Chefs" width={800} height={800} />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-next hero-swiper-button-next"></div>
              <div className="swiper-button-prev hero-swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
