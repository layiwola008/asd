import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { BsArrowRightCircleFill, BsArrowReturnRight } from "react-icons/bs";
import Slide from "react-reveal/Slide";

import WhyusImage from "../public/images/why-us-asd-renewables-02.jpg";
import Leaf from "../public/images/solar-energy-icon-leaf.jpg";
import Link from "next/link";

const WhyUs = () => {
  return (
    <>
    <section className="whyus__container page__wrapper">
      <Slide bottom>
        <div className="whyus__header">
          <div className="header">
            <p>Our Profile</p>
            <h1>
              We Are Focused on Innovations Driving Sustainable
              Development
            </h1>
          </div>
        </div>
      </Slide>
      <div className="whyus__content">
              <h3 className="core__values__header">Our Core Values</h3>
        <div className="whyus__row">
          <Slide bottom>
            <div className="whyus__stats">
              <div>
                {/* <span>
                  <CountUp end={243} />
                </span> */}
                <BsArrowReturnRight className="values__icon" />
                <p>Trust</p>
              </div>
              <div>
                <BsArrowReturnRight className="values__icon" />
                <p>Responsibility</p>
              </div>
              <div>
              <BsArrowReturnRight className="values__icon" />
                <p>Proactivity</p>
              </div>
              <div>
              <BsArrowReturnRight className="values__icon" />
                <p>Innovation</p>
              </div>
            </div>
          </Slide>
          <Slide bottom>
            <div
              className="whyus__img"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <Image
                src={WhyusImage}
                alt="Image"
                width="800"
                height="710"
                objectFit="cover"
                className="whyus__image"
              />
            </div>
          </Slide>
          <Slide bottom>
            <div className="whyus__about">
              {/* <span>
                <Image
                  src={Leaf}
                  alt="Image"
                  width="70"
                  height="70"
                  objectFit="cover"
                  className="whyus__about__icon"
                />
              </span> */}
              <p>
                    ASD emerged as a global energy solution and distribution
                    provider, tapping into the opportunity presented in
                    Nigeria's energy and power shortage to deliver sustainable
                    energy, storage and consumption, including energy
                    digitalization to power industrial, residential, farm and
                    remote areas of the country.
                 
                <br />
                <br />
                We are committed to continuous technology innovations driving
                sustainable growth and adapting to market trends...
              </p>
              <Link href="/asd-renewables/about">
              <button>
                <span className="slider__btn__icon">
                  <BsArrowRightCircleFill />
                </span>
                Learn More
              </button>
              </Link>
            </div>
          </Slide>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyUs;
