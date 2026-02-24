"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    // Mobile nav toggle logic equivalent
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

    function mobileNavToogle() {
      document.querySelector("body")?.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn?.classList.toggle("bi-list");
      mobileNavToggleBtn?.classList.toggle("bi-x");
    }

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle);
    }

    // Hide mobile nav on same-page/hash links
    const navLinks = document.querySelectorAll("#navmenu a");
    navLinks.forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });

    // Toggle scrolled class on body
    const toggleScrolled = () => {
      const selectBody = document.querySelector("body");
      const selectHeader = document.querySelector("#header");
      if (!selectHeader || !selectHeader.classList.contains("sticky-top")) return;
      if (window.scrollY > 100) {
        selectBody?.classList.add("scrolled");
      } else {
        selectBody?.classList.remove("scrolled");
      }
    };

    document.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    return () => {
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", mobileNavToogle);
      }
      document.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
    };
  }, []);

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <i className="bi bi-fork-knife"></i>
          <h1 className="sitename">NiceRestaurant</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="#hero" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#menu">Menu</Link>
            </li>
            <li>
              <Link href="#book-a-table">Book a Table</Link>
            </li>
            <li>
              <Link href="#chefs">Chefs</Link>
            </li>
            <li>
              <Link href="#events">Events</Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="#">Dropdown 1</Link>
                </li>
                <li className="dropdown">
                  <Link href="#">
                    <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link href="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">Dropdown 2</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 3</Link>
                </li>
                <li>
                  <Link href="#">Dropdown 4</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link className="btn-getstarted d-none d-sm-block" href="#book-a-table">
          Book a Table
        </Link>
      </div>
    </header>
  );
}
