"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Kind words from guests who have experienced our hospitality and culinary craft.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="testimonials-swiper">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView="auto"
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 3, spaceBetween: 1 },
            }}
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>&quot;An unforgettable evening. The atmosphere was incredibly refined yet welcoming, and every dish felt like it was crafted with such genuine care and intention. Truly a magnificent experience.&quot;</p>
                <div className="profile mt-auto">
                  <Image src="/assets/img/person/person-m-9.webp" width={90} height={90} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>&quot;From the moment we walked in, we felt completely looked after. The attention to detail in both the service and the plating is unmatched. This isn&apos;t just dining; it&apos;s true hospitality.&quot;</p>
                <div className="profile mt-auto">
                  <Image src="/assets/img/person/person-f-5.webp" width={90} height={90} className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>&quot;The warmth of the staff combined with the perfectly balanced flavors of the tasting menu made for our favorite anniversary dinner yet. We will absolutely be returning.&quot;</p>
                <div className="profile mt-auto">
                  <Image src="/assets/img/person/person-f-12.webp" width={90} height={90} className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>&quot;I was blown away by the culturally grounded menu. You can taste the passion and generosity in every bite. It felt like eating a beautifully composed work of art.&quot;</p>
                <div className="profile mt-auto">
                  <Image src="/assets/img/person/person-m-12.webp" width={90} height={90} className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>&quot;A stunning space with food to match. The staff anticipated our every need without ever hovering. It is rare to find a place that balances luxury and comfort so perfectly.&quot;</p>
                <div className="profile mt-auto">
                  <Image src="/assets/img/person/person-m-13.webp" width={90} height={90} className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
