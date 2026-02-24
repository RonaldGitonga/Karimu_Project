import Link from "next/link";
import Image from "next/image";

export default function Chefs() {
  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Chefs</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-5">
            <div className="chef-highlight" data-aos="fade-right" data-aos-delay="200">
              <figure className="chef-image">
                <Image src="/assets/img/restaurant/chef-1.webp" width={500} height={500} className="img-fluid" alt="Executive Chef" />
              </figure>
              <div className="chef-details">
                <h3>Executive Chef</h3>
                <h2>Gabriel Turner</h2>
                <div className="chef-awards">
                  <span>
                    <i className="bi bi-star-fill"></i> James Beard Award
                  </span>
                  <span>
                    <i className="bi bi-star-fill"></i> Two Michelin Stars
                  </span>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit.</p>
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
                      <Image src="/assets/img/restaurant/chef-2.webp" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
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
                      <h4>Sophia Martinez</h4>
                      <p className="role">Pastry Chef</p>
                      <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim purus a ipsum faucibus, et porttitor.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="chef-card" data-aos="zoom-in" data-aos-delay="250">
                    <div className="chef-img">
                      <Image src="/assets/img/restaurant/chef-3.webp" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
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
                      <h4>Marcus Chen</h4>
                      <p className="role">Sous Chef</p>
                      <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim purus a ipsum faucibus, et porttitor.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="chef-card" data-aos="zoom-in" data-aos-delay="300">
                    <div className="chef-img">
                      <Image src="/assets/img/restaurant/chef-4.webp" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
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
                      <h4>Jonathan Williams</h4>
                      <p className="role">Head of Bar</p>
                      <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim purus a ipsum faucibus, et porttitor.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="chef-card" data-aos="zoom-in" data-aos-delay="350">
                    <div className="chef-img">
                      <Image src="/assets/img/restaurant/chef-5.webp" width={300} height={300} className="img-fluid" alt="Chef Portrait" />
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
                      <h4>Isabella Romano</h4>
                      <p className="role">Grill Master</p>
                      <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim purus a ipsum faucibus, et porttitor.</p>
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
