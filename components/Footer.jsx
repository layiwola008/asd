import Image from "next/image";
import React from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

import Logo from "../public/images/asd-logo.png";
import { ImLocation2 } from "react-icons/im";
import { FaHeadphonesAlt } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer__div">
      <div className="left">
        <p>Quick Contacts</p>
        <Link href="/">
          <span className="logo">
            <Image
              src={Logo}
              alt="ASD Renewables"
              width="200"
              height="70"
              objectFit="cover"
              className="logo"
            />
          </span>
        </Link>
        <span className="address">
          <span className="icon">
            <ImLocation2 />
          </span>
          <p>35 Oran Street, Wuse Zone 1, 900281, Abuja.</p>
        </span>
        <span className="phone">
          <span className="icon">
            <FaHeadphonesAlt />
          </span>
          <p>+2349084000487</p>
        </span>
        <span className="social__media">
          <Link href="https://www.facebook.com/profile.php?id=100085403510093">
            <AiFillFacebook className="social__icon" />
          </Link>
          <Link href="https://twitter.com/AsdRenewables">
            <AiFillTwitterSquare className="social__icon" />
          </Link>

          <Link href="https://www.linkedin.com/company/asdrenewables/">
            <AiFillLinkedin className="social__icon" />
          </Link>
        </span>
      </div>
      <div className="right">
        <span>
          <p>Solutions</p>
          <ul>
            <Link href="/asd-renewables/solutions">
              <li>Residential</li>
            </Link>
            <Link href="/asd-renewables/solutions">
              <li>Industrial</li>
            </Link>
            <Link href="/asd-renewables/solutions">
              <li>Security</li>
            </Link>
            <Link href="/asd-renewables/solutions">
              <li>Farm Zone Energy</li>
            </Link>
            <Link href="/asd-renewables/solutions">
              <li>Community Mini Grid</li>
            </Link>
            <Link href="/how-solar-energy-works">
              <li>How It Works</li>
            </Link>
            <Link href="/how-to-use">
              <li>How To Use</li>
            </Link>
          </ul>
        </span>

        <span>
          <p>Company</p>
          <ul>
            <Link href="/asd-renewables/about">
              <li>About Us</li>
            </Link>

            <Link href="/asd-renewables/services">
              <li>Services</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/asd-renewables/contact">
              <li>Our Partners</li>
            </Link>
          </ul>
        </span>

        <span>
          <p>Support</p>
          <ul>
            <Link href="/faq">
              <li>FAQs</li>
            </Link>

            <Link href="/asd-renewables/contact">
              <li>Contact Us</li>
            </Link>
            <li>
              <a
                href="asd-renewables-profile.pdf"
                download="ASD Renewables Profile.pdf"
              >
                <button className="profileBtn">Download Profile</button>
              </a>
            </li>
          </ul>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
