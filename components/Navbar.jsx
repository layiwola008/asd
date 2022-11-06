import React, { useState } from "react";
import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import Logo from "../public/images/asd-logo.png";
import Link from "next/link";

const Navbar = () => {
  const [page, setPage] = useState(1);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function setCurrentPage(index) {
    setPage(index);
  }

  function setMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <header className="navbar__container">
      <div className="navbar__left">
        <Link href="/">
          <Image
            src={Logo}
            alt=""
            width="200"
            height="70"
            objectFit="cover"
            className="logo"
            onClick={() => setCurrentPage(1)}
          />
        </Link>
      </div>
      <div className="navbar__middle">
        <nav>
        <ul>
          <Link href="/">
            <li
              className={
                page === 1 ? "active__page hide__mobile" : "hide__mobile"
              }
              onClick={() => setCurrentPage(1)}
            >
              Home
            </li>
          </Link>
          <Link href="/asd-renewables/about">
            <li
              className={
                page === 2 ? "active__page hide__mobile" : "hide__mobile"
              }
              onClick={() => setCurrentPage(2)}
            >
              About Us
            </li>
          </Link>
          <Link href="/asd-renewables/solutions">
            <li
              className={
                page === 3 ? "active__page hide__mobile" : "hide__mobile"
              }
              onClick={() => setCurrentPage(3)}
            >
              Solutions
            </li>
          </Link>
          <Link href="/asd-renewables/services">
            <li
              className={
                page === 4 ? "active__page hide__mobile" : "hide__mobile"
              }
              onClick={() => setCurrentPage(4)}
            >
              Services
            </li>
          </Link>
          <Link href="/products">
            <li
              className={
                page === 5 ? "active__page hide__mobile" : "hide__mobile"
              }
              onClick={() => setCurrentPage(5)}
            >
              Products
            </li>
          </Link>
          <Link href="/asd-renewables/contact">
            <li
              className={
                page === 6 ? "active__page hide__mobile" : "hide__mobile"
              }
              onClick={() => setCurrentPage(6)}
            >
              Contact Us
            </li>
          </Link>
        </ul>
        </nav>
        <div className="navbar__phone">
          <span className="navbar__icon hide__mobile">
            <BsTelephoneFill />
          </span>
          <span className="phone__number hide__mobile">+2349084000487</span>
        </div>
      </div>

      {/*Mobile View*/}
      <div className="navbar__right">
        <div className="hamburger">
          {showMobileMenu ? (
            <GrClose className="hamburger__icon" onClick={setMenu} />
          ) : (
            <AiOutlineMenu className="hamburger__icon" onClick={setMenu} />
          )}

          {showMobileMenu && (
            <ul>
              <nav>
              <Link href="/">
                <li onClick={() => setShowMobileMenu(false)}>Home</li>
              </Link>
              <Link href="/asd-renewables/about">
                <li onClick={() => setShowMobileMenu(false)}>About Us</li>
              </Link>
              <Link href="/asd-renewables/solutions">
                <li onClick={() => setShowMobileMenu(false)}>Solutions</li>
              </Link>
              <Link href="/asd-renewables/services">
                <li onClick={() => setShowMobileMenu(false)}>Services</li>
              </Link>
              <Link href="/products">
                <li onClick={() => setShowMobileMenu(false)}>Products</li>
              </Link>
              <Link href="/how-to-use">
                <li onClick={() => setShowMobileMenu(false)}>
                  How To Use Solar Energy
                </li>
              </Link>
              <Link href="/how-solar-energy-works">
                <li onClick={() => setShowMobileMenu(false)}>
                  How Solar Energy Works
                </li>
              </Link>
              <Link href="/faq">
                <li onClick={() => setShowMobileMenu(false)}>
                  Frequently Asked Questions
                </li>
              </Link>

              <li onClick={() => setShowMobileMenu(false)}>Our Partners</li>
              <Link href="/asd-renewables/contact">
                <li onClick={() => setShowMobileMenu(false)}>Contact Us</li>
              </Link>
              </nav>
              <li>
                <div className="navbar__phone">
                  <span className="navbar__icon">
                    <BsTelephoneFill />
                  </span>
                  <span className="phone__number">+2349084000487</span>
                </div>
              </li>
              <li>
                <div
                  className="navbar__quote__mobile"
                  onClick={() => setShowMobileMenu(false)}
                >
                  <Link href="/asd-renewables/quote">
                    <p>EXPLORE MORE</p>
                  </Link>
                </div>
              </li>
            </ul>
          )}
        </div>

        <div className="quote__cta__container hide__mobile">
          <div className="navbar__quote">
            <Link href="/asd-renewables/quote">
              <p>EXPLORE MORE</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
