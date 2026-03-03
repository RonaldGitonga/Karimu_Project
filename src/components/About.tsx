import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="about-content">
              <h3>Rooted in Ukarimu</h3>
              <p className="fst-italic">Karimu draws from the African value of generosity, expressed not though excess, but through intention.</p>
              <p>We curate hospitality experiences that honor culture, conversation, and craft in refined spaces.<br />Hospitality, to us, is not performance. It is presence.</p>

              <div className="chef-signature mt-4">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <Image src="/assets/img/restaurant/chef-1.webp" width={80} height={80} className="chef-avatar rounded-circle" alt="Chef Portrait" />
                  </div>
                  <div className="col">
                    <p className="chef-message mb-2">&quot;Generosity is not abundance. It is care, expressed through detail, atmosphere and welcome.&quot;</p>
                    <p className="chef-name">Founder &amp; Curator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="about-image-wrapper">
              <Image src="/assets/img/restaurant/showcase-4.webp" width={600} height={400} className="img-fluid main-image shadow" alt="Restaurant Interior" />
              <Image src="/assets/img/restaurant/showcase-2.webp" width={300} height={300} className="img-fluid accent-image shadow" alt="Chef Preparing Food" />
              <span className="establishment-year d-flex align-items-center justify-content-center text-center">Est. 2005</span>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4 features-section">
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="bi bi-award"></i>
              </div>
              <h4>Intentionally Curated</h4>
              <p>Every gathering is designed with care, from the guests to the menu.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="bi bi-egg-fried"></i>
              </div>
              <h4>Culturally Grounded</h4>
              <p>Inspired by African generosity and refined hospitality traditions.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <h4>Collaborative</h4>
              <p>We partner with chefs, venues and brands that align in philosophy.</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="500">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="bi bi-heart"></i>
              </div>
              <h4>Refined Atmosphere</h4>
              <p>Luxury, to us, is restraint.</p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">
                  <span>
                    <AnimatedCounter end={10} />
                  </span>+
                </span>
                <p className="stat-label">Years Experience</p>
              </div>

              <div className="stat-item">
                <span className="stat-number">
                  <span>
                    <AnimatedCounter end={5} />
                  </span>
                </span>
                <p className="stat-label">Expert Chefs</p>
              </div>

              <div className="stat-item">
                <span className="stat-number">
                  <span>
                    <AnimatedCounter end={3} />
                  </span>
                </span>
                <p className="stat-label">Culinary Accolades</p>
              </div>

              <div className="stat-item">
                <span className="stat-number">
                  <span>
                    <AnimatedCounter end={15000} separator="," />
                  </span>+
                </span>
                <p className="stat-label">Servings Later</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
