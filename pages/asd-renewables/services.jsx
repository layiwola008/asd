import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

// import Gis from "../../components/services/Gis.jsx";
// import Dmda from "../../components/services/Dmda.jsx";
// import Dcm from "../../components/services/Dcm.jsx";
// import Rsgd from "../../components/services/Rsgd.jsx";

import AsdServices from "../../public/images/asd-rewables-services.jpg";

import GisImage from "../../public/images/gis.jpg";
import DigitalMapping from "../../public/images/digital-mapping.jpg";
import RemoteSensing from "../../public/images/remote-sensing.jpg";
import DataConversion from "../../public/images/data-conversion.jpg";
import Head from "next/head";

const services = () => {
  const [tab, setTab] = useState(1);

  const activateTab = (index) => {
    setTab(index);
  };

  return (
    <>
      <Head>
        <title>
          Our Services: Geographical Information System service, Remote Sensing
          Services, Digital Mapping, Data Acquisition, Data Conversion and
          Migration
        </title>
        <meta
          name="description"
          content="We provide Remote sensing and GIS services, digital mapping service as well as data conversion service."
        />
        <meta
          name="keywords"
          content="Geographical Information System service, Remote Sensing (RS) Services, Digital Mapping, Data Acquisition, Data Conversion and Migration"
        />
      </Head>
      <span className="page__header">
        <Image
          src={AsdServices}
          alt="Image"
          width="1500"
          height="500"
          objectFit="cover"
        />
        <h1>Our Services</h1>
      </span>
      <div className="page__wrapper">
        <div className="col services__header">
          <h2>Explore Our Services</h2>
          <p>
            At ASD, we are positioned to deliver the best of the following
            services in the most effective ways for our clients:
          </p>
        </div>

        {/*Div Tabs*/}
        <div className="box">
          <div className="tabs">
            <div
              onClick={() => activateTab(1)}
              className={`${tab === 1 ? "tab active-tab" : "tab"}`}
            >
              <span className="icon__veritical">
                <BsFillArrowRightCircleFill className="service__icon" />
              </span>
              GIS & RS
            </div>

            <div
              onClick={() => activateTab(2)}
              className={`${tab === 2 ? "tab active-tab" : "tab"}`}
            >
              <span className="icon__veritical">
                <BsFillArrowRightCircleFill className="service__icon" />
              </span>
              Digital Mapping
            </div>

            <div
              onClick={() => activateTab(3)}
              className={`${tab === 3 ? "tab active-tab" : "tab"}`}
            >
              <span className="icon__veritical">
                <BsFillArrowRightCircleFill className="service__icon" />
              </span>
              Data Conversion
            </div>

            {/* <div
              onClick={() => activateTab(4)}
              className={`${tab === 4 ? "tab active-tab" : "tab"}`}
            >
              <span className="icon__veritical">
                <BsFillArrowRightCircleFill className="service__icon" />
              </span>
              Remote Sensing
            </div> */}
          </div>
        </div>
      </div>

      {/*Tab Contents*/}
      <div className="full__container">
        <div className="tab__contents">
          <div
            className={`${
              tab === 1 ? "tab__content active__tab__content" : "tab__content"
            }`}
          >
            <div className="row">
              <div className="col__md">
                <h2 className="service__title">
                  Geographical Information System (GIS) And Remote Sensing (RS)
                  Services
                </h2>
                <article className="service__article">
                  ASD Renewables undertakes and executes geospatial projects for
                  clients of any size. We specialize in GIS and RS Geospatial
                  Solutions. As part of our effort, we aim at grasping new
                  heights and keeping abreast with the latest technologies to
                  provide reliable geospatial solutions with advanced hardware
                  and software to the nation. We provide accurate surveying
                  services of high resolution and medium resolution optical
                  satellite imagery from Maxar Technologies, airborne radar
                  (IfSAR) data and LiDAR with integration of valuable geospatial
                  data.
                  <br />
                  <br />
                  The collected imagery can be efficiently processed to generate
                  digital surface models, topography and imagery data products
                  to integrate into both CAD and GIS systems for Oil and Gas,
                  Land and Maritime Surveillance, National Mapping, Aeronautical
                  Information and Precision Farming markets use.
                  <br />
                  <br />
                  ASD also offers a comprehensive Remote Sensing and GIS
                  services through Ground Survey Method, Satellite Image
                  Processing and Analysis. We provide consulting services to
                  assist clients in project development during design, planning,
                  analysis, implementation and evaluation phases. We provide all
                  ranges of topography and mapping services. We have experience
                  in a variety of field that include but are not limited to:
                  <br />
                  <br />
                </article>
              </div>
              <div className="col__md">
                <article className="service__article">
                  <br />
                  We provide all ranges of topography and mapping services. We
                  have experience in a variety of field that include but are not
                  limited to:
                  <br />
                  <br />
                  <div className="list__space">
                    <ol>
                      <li>Aerial & UAV mapping</li>
                      <li>
                        Topographical survey and mapping in scale 1:500 – 1:10
                        000
                      </li>
                      <li>As built surveys</li>
                      <li>
                        Volume calculating to measure the amount of material to
                        be removed from the site and added to the site (cut and
                        fill)
                      </li>
                      <li>Boundary Surveys</li>
                      <li>Cartographic and GIS-projects</li>
                      <li>3D - modeling</li>
                    </ol>
                  </div>
                  <br />
                  <br />
                </article>
                <Image
                  src={GisImage}
                  alt="Image"
                  width="500"
                  height="500"
                  objectFit="cover"
                  className="image__style"
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              tab === 2 ? "tab__content active__tab__content" : "tab__content"
            }`}
          >
            <div className="row">
              <div className="col__md">
                <h2 className="service__title">
                  Digital Mapping and Data Acquisition
                </h2>
                <article className="service__article">
                  ASD provides comprehensive data acquisition in the most
                  efficient manner for effective Inventories, maintenance
                  procedures, quality control, documentation of state of
                  construction planning and environmental impact studies no
                  matter what the acquisition purpose, be it for a new GIS or an
                  existing GIS system.
                  <br />
                  <br />
                  Our expertise covers a wide range of Asset Management Mapping
                  including but not limited to Underground Utility Cables Piping
                  network, Streetlight and Road Furniture.
                </article>
              </div>
              <div className="col__md">
                <Image
                  src={DigitalMapping}
                  alt="Image"
                  width="500"
                  height="500"
                  objectFit="cover"
                  className="image__style"
                />
              </div>
            </div>
          </div>

          <div
            className={`${
              tab === 3 ? "tab__content active__tab__content" : "tab__content"
            }`}
          >
            <div className="row">
              <div className="col__md">
                <h2 className="service__title">
                  Data Conversion and Migration
                </h2>
                <article className="service__article">
                  We deliver proven data conversion and quality control
                  processes that ensure accurate and complete GIS data in the
                  most cost-effective manner at all times to our clients.
                  <br />
                  <br />
                  We convert and migrate source data into any GIS Platform from:
                  <br />
                  <br />
                  <div className="list__space">
                    <ul className="services__list">
                      <li>Hardcopy Maps</li>
                      <li>GIS Data Format (ESRI Format / MapInfo Format)</li>
                      <li>AutoCAD Drawings</li>
                      <li>Field Records and Notes</li>
                      <li>GPS Data</li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col__md">
                <Image
                  src={DataConversion}
                  alt="Image"
                  width="500"
                  height="500"
                  objectFit="cover"
                  className="image__style"
                />
              </div>
            </div>
          </div>

          {/* <div
            className={`${
              tab === 4 ? "tab__content active__tab__content" : "tab__content"
            }`}
          >
            <div className="row">
              <div className="col__md">
                <h2 className="service__title">
                  Remote Sensing Services and Geospatial Data
                </h2>
                <article className="service__article">
                  Our strategic partnership with Maxar, RADARsat, Helecio and
                  others has given us an edge to consistently deliver advanced
                  geospatial information solutions for complex and demanding
                  operations with High Resolution Optical Satellite Imagery,
                  Satellite Borne, Airborne Radar for IFSAR and LIDAR data.
                  <br />
                  <br />
                  The collected imagery can be efficiently processed to generate
                  digital surface models, topography and imagery data products
                  to integrate into both CAD and GIS systems for Oil and Gas,
                  Land and Maritime Surveillance, National Mapping, Aeronautical
                  Information and Precision Farming markets use.
                </article>
              </div>
              <div className="col__md">
                <Image
                  src={RemoteSensing}
                  alt="Image"
                  width="500"
                  height="500"
                  objectFit="cover"
                  className="image__style"
                />
              </div>
            </div>
          </div> */}

          <Link href="/asd-renewables/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default services;
