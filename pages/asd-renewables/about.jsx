import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";
import Head from "next/head";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

import aboutImage from "../../public/images/about-asd.png";
import asdMan from "../../public/images/about-us-asd-renewables.jpg";
import whyAsd from "../../public/images/why-us-asd-renewables.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title>About ASD Renewables</title>
        <meta
          name="description"
          content="We aggregate different renewable technologies such as hydropower, wind energy, solar energy and biomass."
        />
        <meta
          name="keywords"
          content="hydropower, wind energy, solar energy, biomass"
        />
      </Head>
      <span className="page__header">
        <Image
          src={aboutImage}
          alt="Image"
          width="1500"
          height="500"
          objectFit="cover"
        />
        <h1>About ASD Renewables</h1>
      </span>
      <div className="page__wrapper">
        <div className="row about__content">
          <div className="col__md">
            <div>
              <Slide bottom>
                <Image
                  src={asdMan}
                  alt="Image"
                  width="1000"
                  height="500"
                  objectFit="cover"
                  className="image__style"
                />
              </Slide>
            </div>
            <Slide bottom>
              <h2>Who Are We?</h2>
            </Slide>
            <div className="article__content">
              <Slide bottom>
                <strong>
                  <em>
                    ASD emerged as a global energy solution and distribution
                    provider, tapping into the opportunity presented in
                    Nigeria's energy and power shortage to deliver sustainable
                    energy, storage and consumption, including energy
                    digitalization to power industrial, residential, farm and
                    remote areas of the country.
                  </em>
                </strong>
                <br />
                <br />
                We aggregate different renewable technologies such as
                hydropower, wind energy, solar energy and biomass using abundant
                natural resources within our geographical space as a form of the
                energy mix to create electricity on a commercial scale so as to
                reduce Nigeria's energy gap amid increasing energy growth and
                demand.
                <br />
              </Slide>
            </div>
          </div>
          <div className="col__md">
            <div className="article__content">
              <Slide bottom>
                We source best-designed and manufactured renewable energy
                products such as solar panels, PV inverters, and energy backup
                products creating smart energy management systems for homes,
                commercial and industrial end users including the design and
                setup of mini-grid for communities in rural environments. We
                also undertake the development of viable clean energy solutions
                with different technologies including biomass, hydropower and
                wind turbines.
                <br />
                We are committed to continuous technology innovations driving
                sustainable growth and adapting to market trends to provide
                customized products to our esteemed clients in different parts
                of the globe.
                <br />
                With a combined team of experienced installers, we offer an
                unrivalled service to our happy customers, supported with
                outstanding warranties on our energy solutions and products,
                giving the most ROI with ASD.
              </Slide>
            </div>
          </div>
        </div>

        <div className="mission__container">
          <Slide bottom>
            <div className="mission__left">
              <div>
                <h3>Our Mission</h3>
                <p>
                  To open energy access and allow everyone take advantage of
                  limitless benefit from renewable energy.{" "}
                </p>
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  To become Africa’s foremost producer of renewable energy by
                  designing, delivering and creating an intelligent, reliable,
                  affordable and sustainable renewable energy ecosystem for
                  human kind.
                </p>
              </div>
              <div>
                <h3>Value Proposition</h3>
                <p>
                  Efficient distribution and zero emission energy provider that
                  sustains the globe and its habitants for future generations.
                </p>
              </div>
            </div>
          </Slide>
          <Slide bottom>
            <div className="mission__right">
              <Image
                src={whyAsd}
                alt="Image"
                width="500"
                height="500"
                objectFit="cover"
                className="image__style"
              />
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default About;
