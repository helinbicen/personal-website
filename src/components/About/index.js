import styles from "./index.module.css";
import MeAbout from "../../assets/my-photos/MeAbout.jpeg";
import Resume from "../../assets/files/Helin_Bicen_Resume.pdf";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const [isResumeDownloaded, setIsResumeDownloaded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.href == "https://helinbicen.netlify.app/#about") {
      const customEvent = new CustomEvent("download-resume", {
        detail: {
          page: "about",
          eventData: {
            isResumeDownloaded: isResumeDownloaded,
          },
        },
      });
      // Otomatik olarak eventi tetikle
      document.dispatchEvent(customEvent);
    }
  }, [isResumeDownloaded]);

  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <div className={styles.aboutMe}>
            <h1 className={styles.aboutHeader}>About Me</h1>

            <p className={styles.aboutDescription}>
              I’m Helin, a computer engineering student working on frontend
              development and data analytics. My coding journey started back in
              2017, at the time I was in high school — turns out I really want
              to know every single thing about computer science! I'm happiest
              when I'm creating, learning, exploring and thinking about how to
              make things better.
            </p>

            <a
              href={Resume}
              download="Helin_Bicen_Resume"
              onClick={() => {
                setIsResumeDownloaded(true);
              }}
            >
              <button className={styles.getResume}>My resume</button>
            </a>
          </div>

          <div className={styles.photoContainer}>
            <img src={MeAbout} alt="" />

            <div className={styles.lineOne}></div>
            <div className={styles.lineTwo}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
