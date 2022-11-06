import React from "react";
import Slide from "react-reveal/Slide";

import { solutions } from "../../components/data";
import Link from "next/link";

import aboutImage from "../../public/images/renewable-solutions.jpg";
import Image from "next/image";
import Head from "next/head";

//This page borrows styles from the about.css

const solutionsPage = () => {
  return (
    <>
      <Head>
        <title>ASD Renewable Offers</title>
        <meta
          name="description"
          content="Our team is positioned to deliver the best sustainable energy ecosystem in the most efficient ways"
        />
        <meta
          name="keywords"
          content="home energy solution, industrial energy, community mini grid, solar pump"
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
        <h1>Our Solutions</h1>
      </span>
      <div className="page__wrapper">
        <div className="about__solutions" id="solutions">
          <div className="row">
            <div className="col__md">
              <Slide bottom>
                <h2>Renewable Offers:</h2>
              </Slide>
            </div>
            <div className="col__md">
              <Slide bottom>
                <p className="solutions__header__desc">
                  At ASD, our team is positioned to deliver the best and most
                  intelligent sustainable energy ecosystem in the most
                  innovative and efficient ways for our customers so they can
                  benefit from sustainable energy.
                </p>
              </Slide>
            </div>
          </div>
          <div className="solutions__container">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Slide bottom>
                  <div
                    id={solution.identifier}
                    className="solution"
                    key={solution.id}
                  >
                    <hr />
                    <span>
                      <Icon />
                    </span>
                    <div className="desc">
                      <h3>{solution.title}</h3>
                      <p>{solution.desc}</p>
                      <Link href="/asd-renewables/quote">
                        <button>Request an Assessment</button>
                      </Link>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default solutionsPage;
