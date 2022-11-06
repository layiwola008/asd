import React, { useState } from "react";
import Image from "next/image";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

import { faqContent } from "../components/data";

import AsdServices from "../public/images/asd-rewables-services.jpg";
import Link from "next/link";

const faq = () => {
  const [faq, setFaq] = useState(-1);

  function toggleFaq(id) {
    if (id === faq) {
      setFaq(-1);
      return;
    } else {
      setFaq(id);
    }
  }

  return (
    <>
      <span className="page__header">
        <Image
          src={AsdServices}
          alt="Image"
          width="1500"
          height="500"
          objectFit="cover"
        />
        <h1>Frequently Asked Questions</h1>
      </span>
      <div className="page__wrapper faq__main__comtainer">
        <div className="col">
          <h2 className="faq__header__title">
            Let Us Answer Some Of Your Questions
          </h2>

          <div className="faq__container">
            {faqContent.map((item) => (
              <div
                className={
                  faq === item.id ? "faq__item faq__item__active" : "faq__item"
                }
                key={item.id}
                onClick={() => toggleFaq(item.id)}
              >
                <div
                  className={
                    faq === item.id ? "faq__heading__active" : "faq__heading"
                  }
                >
                  <h3
                    className={faq === item.id ? "active__title" : "faq__title"}
                  >
                    {item.question}
                  </h3>
                  {faq === item.id ? (
                    <>
                      <AiFillMinusSquare />
                    </>
                  ) : (
                    <>
                      <AiFillPlusSquare />
                    </>
                  )}
                </div>
                <div className="faq__body container">
                  <p
                    className={faq === item.id ? "active__content" : "inactive"}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="other__questions">
            <p>Have other questions?</p>
            <Link href="/asd-renewables/contact">
              <button>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default faq;
