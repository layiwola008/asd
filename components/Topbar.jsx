import React from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { GiTimeBomb } from "react-icons/gi";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="topbar__container">
      <div className="topbar__left">
        <div className="topbar__item">
          <span className="tobbar__icon">
            <IoMdMail />
          </span>
          <span> info@asdrenewables.com</span>
        </div>
        <div className="topbar__item">
          <span className="tobbar__icon">
            <GiTimeBomb />
          </span>
          <span> Mon-Fri: 8 am – 5 pm</span>
        </div>
      </div>

      <div className="topbar__right">
        <div className="topbar__links">
          <Link href="/faq">
            <span>FAQ</span>
          </Link>
          <Link href="/asd-renewables/contact">
            <span>Partners</span>
          </Link>
        </div>
        <span>
          <Link href="https://www.facebook.com/profile.php?id=100085403510093">
            <AiFillFacebook className="social__icon" />
          </Link>
        </span>
        <span>
          <Link href="https://twitter.com/AsdRenewables">
            <AiFillTwitterSquare className="social__icon" />
          </Link>
        </span>
        <span>
          <Link href="https://www.linkedin.com/company/asdrenewables/">
            <AiFillLinkedin className="social__icon" />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
