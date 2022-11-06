import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import Slide from "react-reveal/Slide";

import { TiLocation } from "react-icons/ti";
import { MdEmail, MdAccessTimeFilled } from "react-icons/md";
import { BsFillPhoneFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import CustomerCare from "../../public/images/cusntomer-support.jpg";
import Link from "next/link";
import Head from "next/head";

const contact = () => {
  const form = useRef();
  const notify = () =>
    toast.success("Message sent to ASD!", {
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
        "template_mhgnlm6",
        form.current,
        "6gSoBwHFDMp5WlhQX"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          document.getElementById("contact_form").reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Contact US: ASD Renewables</title>
        <meta
          name="description"
          content="Let's talk! Kindly use any of our channels for support."
        />
      </Head>
      <span className="page__header">
        <Image
          src={CustomerCare}
          alt="Image"
          width="1500"
          height="700"
          objectFit="cover"
        />
        <h1>Contact Us</h1>
      </span>
      <div className="page__wrapper">
        <div className="col">
          <Slide bottom>
            <div className="quote__desc">
              <h2>Get In Touch</h2>
              <p>Let's talk! Kindly use any of our channels for support.</p>
            </div>
          </Slide>
        </div>
        <div className="row">
          <Slide bottom>
            <div className="contact__col__left">
              <div>
                <h3>Our Location</h3>
                <p>
                  <TiLocation /> 35 Oran Street, Wuse Zone 1, 900281, Abuja.
                </p>
              </div>
              <div>
                <h3>Quick Contacts</h3>
                <p>
                  <MdEmail /> info@asdrenewables.com
                </p>
                <p>
                  <BsFillPhoneFill /> +2349084000487
                </p>
              </div>
              <div>
                <h3>Opening Hours</h3>
                <p>From Monday - Friday</p>
                <p>
                  <MdAccessTimeFilled /> 8 am to 5 pm
                </p>
              </div>
              {/* <Link href="/asd-renewables/quote"><button><BsFillArrowRightCircleFill className="contact__icon"/> {" "}Request A Quote</button></Link> */}
            </div>
          </Slide>

          <Slide bottom>
            <div className="contact__col__right">
              <div className="contact__form__container">
                <div className="col">
                  <form
                    ref={form}
                    className="contact__form"
                    onSubmit={handleSubmit}
                    id="contact_form"
                  >
                    <div>
                      <span>
                        <label for="fname">First name</label>{" "}
                        <span className="require__style">*</span>
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
                        <label for="lname">Last name</label>{" "}
                        <span className="require__style">*</span>
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
                        <label for="email">Email</label>{" "}
                        <span className="require__style">*</span>
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
                        <label for="phone">Telephone Number</label>{" "}
                        <span className="require__style">*</span>
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
                        <span>
                          <label for="email">Product Code/Description</label>{" "}
                          <span>(Optional)</span>
                          <br />
                          <input type="text" id="email" name="p_code" />
                        </span>
                      </span>
                      <span>
                        <label for="comment">Message/Complaint</label>{" "}
                        <span className="require__style">*</span>
                        <br />
                        <textarea
                          name="message"
                          id="comment"
                          rows="5"
                          required
                        ></textarea>
                      </span>
                      <span>
                        <button type="submit" className="contact__button">
                          <BsFillArrowRightCircleFill className="contact__icon" />{" "}
                          Send Message
                        </button>
                      </span>
                    </div>
                  </form>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default contact;
