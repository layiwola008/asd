import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

//This Page and its siblings is Using
//styles majorly from the about.css

import hydroPower from "../../public/images/hydro-power.jpg";
import Link from "next/link";

const HydroPower = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="post__page__container">
          <div className="row">
            <div className="col__md">
              <Slide bottom>
                <h2>Hydro Power</h2>
              </Slide>
              <div className="post__image__container">
                <Slide bottom>
                  <Image
                    src={hydroPower}
                    alt="Image"
                    width="300"
                    height="300"
                    objectFit="cover"
                    className="image__style"
                  />
                </Slide>
              </div>
            </div>
            <div className="col__md">
              <Slide bottom>
                <p className="solutions__header__desc">
                  <strong>
                    <em>
                      With an installed generation capacity of 16,384MW and the
                      ability to generate about 12,522MW of electricity from
                      existing power plants, Nigeria is only able to distribute
                      4,000MW of electricity leaving its teeming population with
                      an access rate of 60% where the rural community has just
                      34%.
                    </em>
                  </strong>
                  <br />
                  <br />
                  Nigeria's energy consumption is expected to reach 86.4% of its
                  renewable energy share by 2025.
                  <br />
                  <br />
                  The country is endowed with a great amount of oil, gas, hydro
                  (water) and solar resources. The potential of hydropower,
                  being one of the oldest and most abundant forms of energy
                  sources in Nigeria, can be used to mitigate existing power
                  shortages and guarantee additional power availability of close
                  to 50,800 GWh of electricity for Nigerians.
                </p>
              </Slide>

              <Link href="/forms-of-energy/biomass-in-nigeria">
                <button className="energy__post__button">Biomass Energy</button>
              </Link>
              <Link href="/forms-of-energy/wind-energy-in-nigeria">
                <button className="energy__post__button">Wind Energy</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HydroPower;
