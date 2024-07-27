import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="banner-content">
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <h1 className="title">אייס מאסטר, סוכן הפוקר שלך </h1>
                <span className="subtitle">
                  הצטרפו עכשיו למועדון הפוקר המוביל בארץ. חווית פוקר אמיתית
                  זמינה 24/7 עם בונוסים בכל הפקדה והטבות לחברים הקבועים. אל
                  תחמיצו את ההזדמנות להיות חלק מהקהילה המובילה.
                </span>
                <a
                  href="https://wa.me/972524612733?text=שלום%20אני%20מעוניין%20לדבר%20עם%20סוכן"
                  className="axil-btn btn-fill-primary btn-large"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  לשיחה עם סוכן
                </a>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <AnimationOnScroll
                animateIn="fadeInUp"
                animateOnce={true}
                delay={100}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/banner/ace.png"}
                  alt="table"
                />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </div>
      {/* <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"}
            alt="Bubble"
          />
        </li>
      </ul> */}
    </div>
  );
};

export default BannerOne;
