import Link from "next/link";
import Image from "next/image";

export default function Chefs() {
  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Karimu Partners</h2>
        <p>Meet the artisans, growers, and visionaries who help bring our hospitality experience to life.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-5">
            <div className="chef-highlight" data-aos="fade-right" data-aos-delay="200">
              <figure className="chef-image">
                <Image src="/assets/img/restaurant/elena_sommelier.png" width={500} height={500} className="img-fluid" alt="Executive Chef" />
              </figure>
              <div className="chef-details">
                <h3>Lead Sommelier &amp; Wine Curator</h3>
                <h2>Elena Varela</h2>
                <div className="chef-awards">
                  <span>
                    <i className="bi bi-star-fill"></i> Master Sommelier
                  </span>
                  <span>
                    <i className="bi bi-star-fill"></i> Decanter Platinum
                  </span>
                </div>
                <p>Elena travels the globe curating a cellar that highlights sustainable, small-batch vineyards. Her philosophy is that every glass of wine should tell the story of the soil it was grown in.</p>
                <div className="chef-signature">
                  <Image src="/assets/img/misc/signature-1.webp" width={150} height={50} alt="Chef Signature" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="team-container" data-aos="fade-left" data-aos-delay="300">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="chef-card" data-aos="zoom-in" data-aos-delay="200">
                    <div className="chef-img">
                      <Image src="/assets/img/restaurant/amara_ceramicist.png" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
                      <div className="social-links">
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-twitter-x"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="chef-info">
                      <h4>Amara Okafor</h4>
                      <p className="role">Artisanal Ceramicist</p>
                      <p className="details">Amara handcrafts every plate and bowl used in our dining room, drawing inspiration from natural earth tones and traditional pottery techniques.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="chef-card" data-aos="zoom-in" data-aos-delay="250">
                    <div className="chef-img">
                      <Image src="/assets/img/restaurant/julian_farmer.png" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
                      <div className="social-links">
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-twitter-x"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="chef-info">
                      <h4>Julian Rossi</h4>
                      <p className="role">Organic Farm Partner</p>
                      <p className="details">Julian&apos;s regenerative farm provides the restaurant with daily deliveries of seasonal heirloom vegetables, ensuring everything on the plate is vibrant and fresh.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="chef-card" data-aos="zoom-in" data-aos-delay="300">
                    <div className="chef-img">
                      <Image src="/assets/img/restaurant/david_roaster.png" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
                      <div className="social-links">
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-twitter-x"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="chef-info">
                      <h4>David Omondi</h4>
                      <p className="role">Local Coffee Roaster</p>
                      <p className="details">David ethically sources and roasts the single-origin beans that conclude our guests&apos; evenings, focusing on fair-trade partnerships.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="chef-card" data-aos="zoom-in" data-aos-delay="350">
                    <div className="chef-img">
                      <Image src="/assets/img/restaurant/chloe_florist.png" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
                      <div className="social-links">
                        <Link href="#">
                          <i className="bi bi-instagram"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-twitter-x"></i>
                        </Link>
                        <Link href="#">
                          <i className="bi bi-facebook"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="chef-info">
                      <h4>Chloe Dubois</h4>
                      <p className="role">Event Flora Stylist</p>
                      <p className="details">Chloe intentionally designs the botanical arrangements that grace our tables, using only native, seasonal blooms to enhance the atmosphere.</p>
                    </div>
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
