import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//This page borrows styles from the services page
import ourProducts from "../../public/images/our-products.jpg";

import SolarBattery from "../../public/images/products/solar-battery.png";
import Avr from "../../public/images/products/avr.png";
import Connector from "../../public/images/products/solar-connector.png";
import SolarPannels from "../../public/images/products/solar-pannels.png";
import Combiner from "../../public/images/products/panel-combiner.png";
import Controller from "../../public/images/products/charge-controller.png";
import Inverter from "../../public/images/products/inverter.png";
import Rail from "../../public/images/products/solar-panel-mounting-rail.png";
import Rack from "../../public/images/products/battery-rack.png";
import Head from "next/head";

const products = () => {
  const [tab, setTab] = useState(1);

  // useEffect(() => {

  // }, [index]);

  const activateTab = (index) => {
    setTab(index);
  };

  return (
    <>
      <Head>
        <title>Renewable Energy Products</title>
        <meta
          name="description"
          content="We source best-designed and manufactured renewable energy products including Solar Panels, Batteries, Panel Combiners, Charge Controller and AVR."
        />
        <meta
          name="keywords"
          content="Solar Panels, Batteries, Panel Combiners, Charge Controller, AVR, Inverters, Solar Panel Mounting Rail, Solar Connectors, Battery Rack"
        />
      </Head>
      <span className="page__header">
        <Image
          src={ourProducts}
          alt="Image"
          width="1500"
          height="500"
          objectFit="cover"
        />
        <h1>Our Products</h1>
      </span>
      <div className="page__wrapper">
        <div className="col services__header">
          <h2>ASD Renewables Products</h2>
          <p>
            We source best-designed and manufactured renewable energy products.
          </p>
        </div>
      </div>

      <div className="full__container">
        <div className="row">
          <div className="col__md">
            <div className="box__vertical">
              <div className="tabs__vertical">
                <div
                  onClick={() => activateTab(1)}
                  className={`${
                    tab === 1
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Solar Panels
                </div>

                <div
                  onClick={() => activateTab(2)}
                  className={`${
                    tab === 2
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Batteries
                </div>

                <div
                  onClick={() => activateTab(3)}
                  className={`${
                    tab === 3
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Panel Combiners
                </div>

                <div
                  onClick={() => activateTab(4)}
                  className={`${
                    tab === 4
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Charge Controller
                </div>

                <div
                  onClick={() => activateTab(6)}
                  className={`${
                    tab === 6
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  AVR
                </div>

                <div
                  onClick={() => activateTab(7)}
                  className={`${
                    tab === 7
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Inverters
                </div>

                <div
                  onClick={() => activateTab(8)}
                  className={`${
                    tab === 8
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Solar Panel Mounting Rail
                </div>

                <div
                  onClick={() => activateTab(9)}
                  className={`${
                    tab === 9
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Solar Connectors
                </div>

                <div
                  onClick={() => activateTab(10)}
                  className={`${
                    tab === 10
                      ? "tab__vertical active-tab-vertical"
                      : "tab__vertical"
                  }`}
                >
                  <span className="icon__veritical">
                    <BsFillArrowRightCircleFill />
                  </span>
                  Battery Rack
                </div>
              </div>
            </div>
          </div>

          {/*Tab Contents*/}

          <div className="col__md">
            <div className="tab__contents__vertical">
              <div
                className={`${
                  tab === 1
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Solar Panels</h2>
                <Image
                  src={SolarPannels}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>
              <div
                className={`${
                  tab === 2
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Batteries</h2>
                <Image
                  src={SolarBattery}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>
              <div
                className={`${
                  tab === 3
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Panel Combiners</h2>
                <Image
                  src={Combiner}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>

              <div
                className={`${
                  tab === 4
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Charge Controller</h2>
                <Image
                  src={Controller}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>

              <div
                className={`${
                  tab === 6
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">AVR</h2>
                <Image
                  src={Avr}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>

              <div
                className={`${
                  tab === 7
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Inverters</h2>
                <Image
                  src={Inverter}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>

              <div
                className={`${
                  tab === 8
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Solar Panel Mounting Rail</h2>
                <Image
                  src={Rail}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>

              <div
                className={`${
                  tab === 9
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Solar Connectors</h2>
                <Image
                  src={Connector}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>

              <div
                className={`${
                  tab === 10
                    ? "tab__content active__tab__content"
                    : "tab__content"
                }`}
              >
                <h2 className="service__title">Battery Rack</h2>
                <Image
                  src={Rack}
                  alt="Image"
                  width="300"
                  height="300"
                  objectFit="cover"
                  className="image__style product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default products;
