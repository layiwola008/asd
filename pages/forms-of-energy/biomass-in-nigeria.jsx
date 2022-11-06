import React from "react";
import Image from "next/image";
import Slide from "react-reveal/Slide";

//This Page and its siblings is Using
//styles majorly from the about.css

import bioMassEnergy from "../../public/images/biomass-energy.jpg";
import Link from "next/link";

const BioMass = () => {
  return (
    <>
      <div className="page__wrapper">
        <div className="post__page__container">
          <div className="row">
            <div className="col__md">
              <Slide bottom>
                <h2>Biomass Energy</h2>
              </Slide>
              <div className="post__image__container">
                <Slide bottom>
                  <Image
                    src={bioMassEnergy}
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
                      Biomass energy, or "bioenergy," is energy from plants and
                      plant-derived materials. Emerging technologies exist that
                      help transform food crops, grassy and woody plants,
                      residues from agriculture organic components and
                      industrial waste to a range of valuable liquid biofuels,
                      chemicals similar to what is obtainable from oil
                      refineries and petrochemicals.
                    </em>
                  </strong>
                  <br />
                  <br />
                  In order to modernize our energy system and to significantly
                  boost the energy supply in Nigeria ASD undertakes biomass
                  projects as a form of power generation technology and also to
                  create an eco-friendly environment.
                  <br />
                  <br />
                </p>
              </Slide>
              <Link href="/forms-of-energy/hydro-power-in-nigeria">
                <button className="energy__post__button">Hydro Power</button>
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

export default BioMass;
