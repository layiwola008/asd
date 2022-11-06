import Image from "next/image";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Slide from "react-reveal/Slide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import requestQuoteImage from "../../public/images/request-quote-asd.jpg";
import Head from "next/head";

const quote = () => {
  const form = useRef();
  const notify = () =>
    toast.success("Quote request sent to ASD!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yblcqli",
        "template_8x12jtr",
        form.current,
        "6gSoBwHFDMp5WlhQX"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          document.getElementById("quote_form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Request Renewable Energy Assessment or Quote</title>
        <meta
          name="description"
          content="Please fill in the form below to request a power audit for solar installation and other forms of renewable energy and we will respond in 48 hours."
        />
        <meta
          name="keywords"
          content="solar power audit"
        />
      </Head>
      <span className="page__header">
        <Image
          src={requestQuoteImage}
          alt="Image"
          width="1500"
          height="700"
          objectFit="cover"
        />
        <h1>Request an Assessment</h1>
      </span>
      <div className="page__wrapper">
        <div className="col">
          <Slide bottom>
            <div className="quote__desc">
              <h2>Fill In The Request Form</h2>
              <p>
                Please fill in the form below and we will respond in 48 hours.
              </p>
            </div>
          </Slide>
          <Slide bottom>
            <div className="quote__form__container">
              <div className="col">
                <form
                  ref={form}
                  id="quote_form"
                  className="form"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <span>
                      <label for="fname">First name:</label>
                      <br />
                      <input
                        type="text"
                        id="fname"
                        placeholder="Your Firstname"
                        name="f_name"
                        required
                      />
                    </span>
                    <span>
                      <label for="lname">Last name:</label>
                      <br />
                      <input
                        type="text"
                        id="lname"
                        placeholder="Your Lastname"
                        name="l_name"
                        required
                      />
                    </span>
                    <span>
                      <label for="email">Email:</label>
                      <br />
                      <input
                        type="text"
                        id="email"
                        placeholder="Enter Email Address"
                        name="email"
                        required
                      />
                    </span>
                    <span>
                      <label for="phone">Telephone Number:</label>
                      <br />
                      <input
                        type="text"
                        id="phone"
                        placeholder="Mobile Number"
                        name="phone"
                        required
                      />
                    </span>
                    <span>
                      <label for="solution">Choose A Solution:</label>
                      <br />
                      <select name="solution" id="solution" required>
                        <option value="">--Select Solution--</option>
                        <option value="Residential/Home Energy">
                          Residential/Home Energy
                        </option>
                        <option value="Commercial and Industrial Energy">
                          Commercial and Industrial Energy
                        </option>
                        <option value="Community Mini Grid">
                          Community Mini Grid
                        </option>
                        <option value="Farm Zone Energy – Solar pump, Lighting">
                          Farm Zone Energy – Solar pump, Lighting
                        </option>
                        <option value="Security: Solar-Powered Surveillance Camera">
                          Security: Solar-Powered Surveillance Camera
                        </option>
                      </select>
                    </span>
                    <span>
                      <label for="comment">Comment:</label>
                      <br />
                      <textarea
                        name="comment"
                        id="comment"
                        rows="5"
                        required
                      ></textarea>
                    </span>
                  </div>
                  <button type="submit" className="button">
                    Send Your Request Now!
                  </button>
                </form>
                <ToastContainer />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default quote;
