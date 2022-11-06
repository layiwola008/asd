import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

import aboutImage from "../public/images/about-asd.png";
import howItWorksImage from "../public/images/how-it-works.jpg";

import Link from "next/link";
import Head from "next/head";

const howItWorks = () => {
  return (
    <>
       <Head>
        <title>How Solar Energy Storage Works</title>
        <meta
          name="description"
          content="A solar energy storage system consists of four main parts: Solar panels, Solar charge controllers, Inverter and Batteries..."
        />
        <meta
          name="keywords"
          content="How Solar Energy Storage Works"
        />
      </Head>
      <span className="page__header">
        <Image
          src={aboutImage}
          alt="Image"
          width="1370"
          height="400"
          objectFit="cover"
        />
        <h1>How It Works</h1>
      </span>
      <div className="page__wrapper">
        <div className="row">
          <div className="col__md">
            <div>
              <Slide bottom>
                <Image
                  src={howItWorksImage}
                  alt="Image"
                  width="540"
                  height="440"
                  objectFit="cover"
                  className="image__style"
                />
              </Slide>
            </div>
          </div>
          <div className="col__md">
            <Slide bottom>
              <h2>How Solar Energy Storage Works</h2>
            </Slide>
            <div className="article__content">
            <Slide bottom>
              A solar energy storage system consists of four main parts:
              <br />
              <div className="list__space">
                <ul>
                  <li>Solar panels</li>
                  <li>Solar charge controllers</li>
                  <li>Inverter</li>
                  <li>Batteries</li>
                </ul>
              </div>
              <br />
              Below is an explanation of how the solar energy system works.
              <br />
              With high energy radiation from sunlight, the solar panels capture
              the energy and provide electricity to the system. Power provided
              by the solar panels through the charge controllers will be used to
              recharge the batteries. The amount of voltage needed to charge the
              batteries rises as the batteries charge. When the batteries are
              fully charged, the charge controller maintains a trickle charge to
              hold the batteries at their full charge.
              <br />
              The inverter converts the DC power from the solar panels or the
              batteries into AC power. The power drawn from the solar panels
              will then be consumed in the home.
              <br />
              When the sun goes down, in order to prevent the batteries from
              discharging into the solar panels the charge controller blocks
              current from flowing from the batteries to the solar panels. The
              system draws power from the batteries. Home batteries are sized
              (charge capacity) to be able to fully power the home for 6 hours
              or more. The batteries are then charged from the solar panels the
              next day.
            </Slide>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default howItWorks;
