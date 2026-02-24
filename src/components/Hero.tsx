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
              <div className="status-badge">Reservations Open</div>
              <h2>Savor the Moment, One Bite at a Time</h2>
              <p>Discover a journey of flavors at our exquisite restaurant. Immerse yourself in a delightful dining experience crafted with passion and precision.</p>

              <div className="opening-hours" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-clock"></i>
                <span>Open Daily: 11am - 10pm</span>
              </div>

              <div className="btn-group">
                <Link href="#book-a-table" className="btn btn-book">
                  Book a Table
                </Link>
                <Link href="#menu" className="btn btn-menu">
                  Explore Our Menu
                </Link>
              </div>

              <div className="social-links">
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>
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
