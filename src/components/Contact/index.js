import styles from "./index.module.css";

import { Link } from "react-router-dom";

import gmail from "../../assets/contact/gmail.png";
import linkedin from "../../assets/contact/linkedin.png";
import location from "../../assets/contact/location.png";
import github from "../../assets/contact/github.svg";

import { useState } from "react";
import { pushDataToDataLayer } from "../../utils/gtm";

const Contact = () => {
  const [isLinkClicked, setIsLinkClicked] = useState({
    location: false,
    mail: false,
    linkedin: false,
    github: false,
  });

  const contactPageData = {
    event: "contact-link-click",
    page: "contact",
    controlLinkClicks: isLinkClicked,
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <div className={styles.content}>
          <div className={styles.header}>Contact</div>

          <div className={styles.contactInfo}>
            <div className={styles.getInContact}>
              <a
                href="https://goo.gl/maps/epfYjANQyikUZGYQ8"
                onClick={() => {
                  setIsLinkClicked((prev) => {
                    return {
                      ...prev,
                      location: true,
                    };
                  });
                  pushDataToDataLayer(contactPageData);
                }}
              >
                {" "}
                <img src={location} alt="" className={styles.contactIcon} />
              </a>
              <p>Istanbul, Turkey</p>
            </div>
            <div className={styles.getInContact}>
              <a
                href="mailto:helinbicen@outlook.com"
                onClick={() => {
                  setIsLinkClicked((prev) => {
                    return {
                      ...prev,
                      mail: true,
                    };
                  });
                  pushDataToDataLayer(contactPageData);
                }}
              >
                <img src={gmail} alt="" className={styles.contactIcon} />
              </a>
              <p>E-Mail</p>
            </div>
            <div className={styles.getInContact}>
              <a
                href="https://www.linkedin.com/in/helinbicen/"
                onClick={() => {
                  setIsLinkClicked((prev) => {
                    return {
                      ...prev,
                      linkedin: true,
                    };
                  });
                  pushDataToDataLayer(contactPageData);
                }}
              >
                <img src={linkedin} alt="" className={styles.contactIcon} />
              </a>
              <p>LinkedIn</p>
            </div>
            <div className={styles.getInContact}>
              <a
                href="https://github.com/helinbicen"
                onClick={() => {
                  setIsLinkClicked((prev) => {
                    return {
                      ...prev,
                      github: true,
                    };
                  });
                  pushDataToDataLayer(contactPageData);
                }}
              >
                <img src={github} alt="" className={styles.contactIcon} />
              </a>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
