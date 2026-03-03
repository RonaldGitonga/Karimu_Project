"use client";

import Link from "next/link";
import Image from "next/image";
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
          <Image
            src="/assets/img/karimu-logo-circle.png"
            alt="The Karimu Experience"
            width={44}
            height={44}
            style={{
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #c9a96e",
              flexShrink: 0,
              minWidth: "44px"
            }}
            priority
          />
          <h1 className="sitename" style={{ marginLeft: "10px", fontSize: "0.95rem", whiteSpace: "nowrap", lineHeight: 1.2 }}>The Karimu Experience</h1>
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
              <Link href="#experiences">Experiences</Link>
            </li>
            <li>
              <Link href="#events">Gatherings</Link>
            </li>
            <li>
              <Link href="#chefs">Collaborations</Link>
            </li>
            <li>
              <Link href="#book-a-table">Reserve Seat</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li className="dropdown">
              <Link href="#">
                <span>More</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link href="#">Gallery</Link>
                </li>
                <li>
                  <Link href="#">Journal</Link>
                </li>
              </ul>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link className="btn-getstarted d-none d-sm-block" href="#book-a-table">
          Reserve Seat
        </Link>
      </div>
    </header>
  );
}
