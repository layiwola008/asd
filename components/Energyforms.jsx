import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import Bounce from "react-reveal/Bounce";

import { energyForms } from "./data";

const Energyforms = () => {
  return (
    <section className="energy__forms__container page__wrapper">
      <div className="header">
        <div className="left">
          <Bounce bottom>
            <h2>Major Forms of Renewable Energy</h2>
          </Bounce>
        </div>

        <Bounce bottom>
          <div className="right">
            <p>
              At ASD, our group is situated to convey the best and shrewd
              sustainable energy ecosystem in the most creative and productive
              ways for our clients so they can benefit from sustainable energy.
            </p>
            <Link href="/asd-renewables/solutions">
              <button>Explore Solutions</button>
            </Link>
          </div>
        </Bounce>
      </div>

      <div className="cards">
        {energyForms.map((item) => (
          <Bounce bottom key={item.id}>
            <div className="card">
              <span>
                <Link href={item.page}>
                  <Image
                    src={item.image}
                    alt="Image"
                    width="600"
                    height="300"
                    objectFit="cover"
                  />
                </Link>
              </span>
              <div className="details">
                <Link href={item.page}>
                  <h3>{item.header}</h3>
                </Link>
                <p>{item.shorDesc}</p>
                <Link href={item.page}>
                  <button>
                    <span className="read_more_icon">
                      <BsArrowRightCircleFill />
                    </span>
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </Bounce>
        ))}
      </div>
    </section>
  );
};

export default Energyforms;
