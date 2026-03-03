import Image from "next/image";
import Link from "next/link";

export default function Events() {
  return (
    <section id="events" className="events section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="intro-text text-center mb-5" data-aos="fade-up" data-aos-delay="150">
          <h2>Create Unforgettable Moments</h2>
          <p>From intimate celebrations to grand gatherings, our spaces are intentionally designed to host life&apos;s most meaningful milestones with effortless grace and generous hospitality.</p>
        </div>

        <div className="event-types">
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="event-type-card">
                <div className="icon-wrapper">
                  <i className="bi bi-calendar-heart"></i>
                </div>
                <h3>Weddings &amp; Celebrations</h3>
                <p>We craft bespoke, romantic experiences ensuring every detail from the floral arrangements to the tailored menu expresses your unique love story.</p>
                <span className="capacity">Up to 150 guests</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="250">
              <div className="event-type-card">
                <div className="icon-wrapper">
                  <i className="bi bi-building"></i>
                </div>
                <h3>Corporate Events</h3>
                <p>Impress clients or reward your team in our refined spaces, featuring a curated atmosphere and impeccable service designed for professional excellence.</p>
                <span className="capacity">Up to 100 guests</span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="event-type-card">
                <div className="icon-wrapper">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Private Gatherings</h3>
                <p>Host exclusive dinners or milestone birthdays in a private, intimate setting where the food, wine, and conversation flow seamlessly.</p>
                <span className="capacity">Up to 50 guests</span>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-showcase" data-aos="fade-up" data-aos-delay="150">
          <div className="row g-3">
            <div className="col-lg-8">
              <div className="main-image" data-aos="zoom-in" data-aos-delay="200">
                <Image src="/assets/img/restaurant/event-1.webp" width={800} height={600} alt="Event Space" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-3">
                <div className="col-lg-12 col-md-6">
                  <div className="gallery-item" data-aos="zoom-in" data-aos-delay="250">
                    <Image src="/assets/img/restaurant/event-5.webp" width={400} height={300} alt="Event" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
                    <Image src="/assets/img/restaurant/event-7.webp" width={400} height={300} alt="Event" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="event-cta" data-aos="fade-up" data-aos-delay="200">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3>Ready to plan your special event?</h3>
              <p>Our dedicated event curation team is ready to bring your vision to life. Contact us today to discuss your date and requirements.</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href="#contact" className="btn-reserve">
                Reserve Venue
              </Link>
            </div>
          </div>
        </div>

        <div className="featured-events" data-aos="fade-up" data-aos-delay="200">
          <h3>Upcoming Featured Events</h3>

          <div className="row g-4">
            <div className="col-lg-6 col-md-6">
              <div className="featured-event-card" data-aos="fade-up" data-aos-delay="250">
                <div className="event-date">
                  <span className="month">Jun</span>
                  <span className="day">18</span>
                </div>
                <div className="event-content">
                  <div className="event-image">
                    <Image src="/assets/img/restaurant/event-3.webp" width={400} height={300} alt="Summer Wine Festival" className="img-fluid" />
                  </div>
                  <div className="event-info">
                    <h4>Summer Wine Festival</h4>
                    <ul className="event-meta">
                      <li>
                        <i className="bi bi-clock"></i> 6:00 PM - 10:00 PM
                      </li>
                      <li>
                        <i className="bi bi-geo-alt"></i> Garden Terrace
                      </li>
                    </ul>
                    <p>Join our Lead Sommelier, Elena, for an exclusive evening exploring sustainable, small-batch vintages paired with seasonal bites.</p>
                    <Link href="#" className="btn-details">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="featured-event-card" data-aos="fade-up" data-aos-delay="300">
                <div className="event-date">
                  <span className="month">Jul</span>
                  <span className="day">05</span>
                </div>
                <div className="event-content">
                  <div className="event-image">
                    <Image src="/assets/img/restaurant/event-8.webp" width={400} height={300} alt="Gourmet Tasting Night" className="img-fluid" />
                  </div>
                  <div className="event-info">
                    <h4>Gourmet Tasting Night</h4>
                    <ul className="event-meta">
                      <li>
                        <i className="bi bi-clock"></i> 7:30 PM - 11:00 PM
                      </li>
                      <li>
                        <i className="bi bi-geo-alt"></i> Main Dining Hall
                      </li>
                    </ul>
                    <p>Experience a seven-course culinary journey meticulously crafted by our Executive Chef to highlight the absolute best of local, organic farm produce.</p>
                    <Link href="#" className="btn-details">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
