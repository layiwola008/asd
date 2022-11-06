import Image from "next/image";
import React from "react";
import Slide from "react-reveal/Slide";

import { FaSolarPanel } from "react-icons/fa";
import { FaCarBattery } from "react-icons/fa";
import { ImPowerCord } from "react-icons/im";

import howToUseSystem from "../public/images/how-to-use-solar.jpg";

import SolarBattery from "../public/images/products/solar-battery.png";
import Link from "next/link";
import Head from "next/head";

const howToUse = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
        <Head>
        <title>How To Use Your Solar Energy System</title>
        <meta
          name="description"
          content="3 Ways To Keep Away From Blackouts: generate, store and consume."
        />
        <meta
          name="keywords"
          content="How To Use Your Solar Energy"
        />
      </Head>
      <span className="page__header steps__header">
        <Image
          src={howToUseSystem}
          alt="Image"
          width="1500"
          height="600"
          objectFit="cover"
        />
        <h1>How To Use Your System</h1>
      </span>
      <div className="page__wrapper">
        <div className="col steps__container">
          <h2>3 Ways To Keep Away From Blackouts</h2>
          <section className="steps">
            <div className="col">
              <Slide bottom>
                <div className="steps__row">
                  <div className="col__md step">
                    <h3>Step One</h3>
                    <p>Generate energy using your own solar panels.</p>
                  </div>
                  <div className="col__md">
                    <FaSolarPanel className="step__icon" />
                  </div>
                </div>
              </Slide>

              <Slide bottom>
                <div className="steps__row__reverse">
                  <div className="col__md">
                    <FaCarBattery className="step__icon" />
                  </div>
                  <div className="col__md step">
                    <h3>Step Two</h3>
                    <p>Store the energy generated with batteries.</p>
                  </div>
                </div>
                </Slide>

              <Slide bottom>
                <div className="steps__row">
                  <div className="col__md step">
                    <h3>Step Three</h3>
                    <p>
                      Avoid power outages by powering your home and consuming
                      the energy stored.
                    </p>
                  </div>
                  <div className="col__md">
                    <ImPowerCord className="step__icon" />
                  </div>
                </div>
              </Slide>
            </div>
          </section>
          <Link href="/asd-renewables/quote">
            <button>Go Solar Now!</button>
          </Link>
        </div>
      </div>
      <div className="steps__end"></div>
    </>
  );
};

export default howToUse;
