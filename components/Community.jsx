import React from "react";
import { Bounce } from "react-reveal";
import Slide from "react-reveal/Slide";

const Community = () => {
  return (
    <>
      <section className="commparent">
        <div className="community__container"></div>
        <div className="community__content page__wrapper">
          <article>
            <Slide bottom>
              <h2>
                <span>Community</span> Mini Grid Solution
              </h2>
            </Slide>
            <div className="content">
              <div className="left">
                <Slide bottom>
                  <h3>Off-Grid Power</h3>
                </Slide>
                <hr />
                <Bounce bottom>
                  <p>
                    We join forces with communities to create power to support
                    their localities.
                  </p>
                </Bounce>
              </div>

              <div className="right">
                <Slide bottom>
                  <p>
                    Rural communities that are out of grid connections owing to
                    their geographical locations do not need to worry going
                    forward. We partner with communities to help design,
                    implement and generate local power to sustain their
                    community and ease their communal life with flexible payment
                    plans.
                  </p>
                </Slide>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Community;
