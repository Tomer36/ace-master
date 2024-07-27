import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BannerOne from "../component/banner/BannerOne";
import ServicePropOne from "../component/service/ServicePropOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";

const DigitalAgency = () => {
  return (
    <>
      <SEO title="סוכן" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerOne />
        <div className="section section-padding-2 bg-color-dark">
          <div className="container">
            <SectionTitle
              subtitle=""
              title="ClubGG – מי אנחנו?"
              description="אם אתם אוהבים פוקר ומחפשים חוויה מרגשת, ClubGG הוא המקום בשבילכם. הצטרפו לקלאב הפוקר שלנו ותיהנו ממגוון משחקי פוקר פופולריים. ClubGG הוא קלאב פרטי, בו תוכלו לשחק פוקר עם כסף אמיתי בשקל. הצטרפו אלינו ותהנו משולחנות משחק פוקר עם פרסים שיכולים להגיע ל-150 אלף שקל ומעלה."
              textAlignment="heading-light-left"
              textColor=""
            />
            <div className="row">
              <ServicePropOne
                colSize="col-xl-4 col-md-6"
                serviceStyle=""
                itemShow="6"
              />
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-9.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"}
                alt="Circle"
              />
            </li>
          </ul>
        </div>
        {/* <div className="section bg-color-light section-padding">
          <ul className="list-unstyled shape-group-3">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-1.png"}
                alt="shape"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"}
                alt="shape"
              />
            </li>
          </ul>
        </div> */}
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default DigitalAgency;
