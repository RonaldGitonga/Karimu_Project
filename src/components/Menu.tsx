"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  useEffect(() => {
    // Isotope initialization
    let isotopeInstance: any = null;
    const isotopeContainer = document.querySelector(".isotope-container") as HTMLElement;
    const isotopeFilters = document.querySelectorAll(".isotope-filters li");

    if (isotopeContainer) {
      import("isotope-layout").then((Isotope) => {
        isotopeInstance = new Isotope.default(isotopeContainer, {
          itemSelector: ".isotope-item",
          layoutMode: "masonry",
          filter: "*",
        });

        isotopeFilters.forEach((filter) => {
          filter.addEventListener("click", function (this: HTMLElement, e) {
            e.preventDefault();
            isotopeFilters.forEach((el) => el.classList.remove("filter-active"));
            this.classList.add("filter-active");

            const filterValue = this.getAttribute("data-filter");
            if (filterValue && isotopeInstance) {
              isotopeInstance.arrange({ filter: filterValue });
            }
          });
        });
      });
    }

    return () => {
      if (isotopeInstance) isotopeInstance.destroy();
    };
  }, []);


  return (
    <section id="menu" className="menu section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Menu</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up">
        <div className="isotope-layout">
          <div className="menu-filters isotope-filters mb-5">
            <ul>
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-main">Main Courses</li>
              <li data-filter=".filter-dessert">Desserts</li>
              <li data-filter=".filter-drinks">Drinks</li>
            </ul>
          </div>

          <div className="menu-container isotope-container row gy-4">
            <div className="col-lg-6 isotope-item filter-starters">
              <div className="menu-item d-flex align-items-center gap-4">
                <Image src="/assets/img/restaurant/starter-2.webp" width={80} height={80} alt="Starter" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Bruschetta Trio <span className="menu-tag">Vegetarian</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$8.95</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 isotope-item filter-starters">
              <div className="d-flex menu-item align-items-center gap-4">
                <Image src="/assets/img/restaurant/starter-5.webp" width={80} height={80} alt="Starter" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Calamari Fritti <span className="menu-tag">Seafood</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$10.95</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 isotope-item filter-main">
              <div className="d-flex menu-item align-items-center gap-4">
                <Image src="/assets/img/restaurant/main-1.webp" width={80} height={80} alt="Main Course" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Wild Mushroom Risotto <span className="menu-tag">Vegetarian</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$18.95</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 isotope-item filter-main">
              <div className="d-flex menu-item align-items-center gap-4">
                <Image src="/assets/img/restaurant/main-4.webp" width={80} height={80} alt="Main Course" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Braised Lamb Shank <span className="menu-tag">Chef&apos;s Choice</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$26.95</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 isotope-item filter-dessert">
              <div className="d-flex menu-item align-items-center gap-4">
                <Image src="/assets/img/restaurant/dessert-2.webp" width={80} height={80} alt="Dessert" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Chocolate Lava Cake <span className="menu-tag">Gluten Free</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$9.95</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 isotope-item filter-dessert">
              <div className="d-flex menu-item align-items-center gap-4">
                <Image src="/assets/img/restaurant/dessert-7.webp" width={80} height={80} alt="Dessert" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Tiramisu <span className="menu-tag">Classic</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$8.95</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 isotope-item filter-drinks">
              <div className="d-flex menu-item align-items-center gap-4">
                <Image src="/assets/img/restaurant/drink-3.webp" width={80} height={80} alt="Drink" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Signature Cocktail <span className="menu-tag">Alcoholic</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$12.95</div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 isotope-item filter-drinks">
              <div className="d-flex menu-item align-items-center gap-4">
                <Image src="/assets/img/restaurant/drink-8.webp" width={80} height={80} alt="Drink" className="menu-img img-fluid rounded-3" />
                <div className="menu-content">
                  <h5>
                    Berry Smoothie <span className="menu-tag">Non-Alcoholic</span>
                  </h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                  <div className="price">$7.95</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5" data-aos="fade-up">
          <Link href="#" className="download-menu">
            <i className="bi bi-file-earmark-pdf"></i> Download Full Menu
          </Link>
        </div>

        <div className="col-12 mt-5" data-aos="fade-up">
          <div className="specials-badge">
            <span>
              <i className="bi bi-award"></i> Chef&apos;s Specials
            </span>
          </div>
          <div className="specials-container">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="menu-item special-item">
                  <div className="menu-item-img">
                    <Image src="/assets/img/restaurant/main-3.webp" width={400} height={300} alt="Special Dish" className="img-fluid" />
                    <div className="menu-item-badges">
                      <span className="badge-special">Special</span>
                      <span className="badge-vegan">Vegan</span>
                    </div>
                  </div>
                  <div className="menu-item-content">
                    <h4>Mediterranean Grilled Salmon</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam metus. Vivamus fermentum magna quis.</p>
                    <div className="menu-item-price">$24.99</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="menu-item special-item">
                  <div className="menu-item-img">
                    <Image src="/assets/img/restaurant/main-7.webp" width={400} height={300} alt="Special Dish" className="img-fluid" />
                    <div className="menu-item-badges">
                      <span className="badge-special">Special</span>
                      <span className="badge-spicy">Spicy</span>
                    </div>
                  </div>
                  <div className="menu-item-content">
                    <h4>Signature Ribeye Steak</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan risus ut dui pretium, eget elementum nisi.</p>
                    <div className="menu-item-price">$32.99</div>
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
