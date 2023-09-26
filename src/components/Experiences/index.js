import styles from "./index.module.css";

import Ieee from "../../assets/experience/Ieee.jfif";
import Wnext from "../../assets/experience/Wnext.jfif";
import ThyLogo from "../../assets/experience/thyLogo.jpeg"

const Experiences = () => {
  return (
    <div className={styles.experiences} id="experiences">
      <div className={styles.experiencesContainer}>
      <div className={styles.content}>
          <div className={styles.experience}>
            <div className={styles.title}>Part-Time Software Developer</div>
            <div className={styles.otherDetails}>
              <p>Turkish Airlines Technology</p>
              <p>Feb 2023 - Present · 8 mos</p>
              <p>Istanbul, Turkey</p>
            </div>
            <div className={styles.description}>
              As a frontend developer at Turkish Airlines Technology, I
              specialize in utilizing technologies such as Vue, Knockout,
              jQuery, and Sass. Working simultaneously on multiple projects, my
              role involves creating dynamic and user-friendly interfaces. I
              collaborate with cross-functional teams to implement innovative
              features, optimize performance, and ensure a seamless user
              experience. Through my expertise in these technologies, I
              contribute to enhancing the visual appeal and functionality of
              various projects, ultimately contributing to the success of
              Turkish Airlines Technology in delivering cutting-edge digital
              solutions.
            </div>
          </div>

          <div className={styles.photos}>
            <img src={ThyLogo} alt="" className={styles.thyLogo} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.experience}>
            <div className={styles.header}>Experiences</div>
            <div className={styles.title}>
              Frontend Developer & UI/UX Designer
            </div>
            <div className={styles.otherDetails}>
              <p>IEEE - Istanbul University</p>
              <p>Nov 2021 - Aug 2022 · 10 mos</p>
              <p>Istanbul, Turkey</p>
            </div>
            <div className={styles.description}>
              This is a student club of IEEE (Institute of Electrical and
              Electronics Engineers). I worked as Frontend Developer and UI/UX
              Designer for IEEE's Computer Society team named WNEXT. The goal
              was to develop a tourism assistant for TEKNOFEST, which is the
              most important technology competition in Turkey.
            </div>
          </div>

          <div className={styles.photos}>
            <img src={Ieee} alt="" className={styles.ieeeLogo} />
            <img src={Wnext} alt="" className={styles.wnextLogo} />
          </div>
        </div>
   
      </div>
    </div>
  );
};

export default Experiences;
