import styles from "./index.module.css";

import HtmlIcon from "../../assets/skill-icons/HtmlIcon.png"
import CssIcon from "../../assets/skill-icons/CssIcon.png"
import JavascriptIcon from "../../assets/skill-icons/JavascriptIcon.png"
import ReactIcon from "../../assets/skill-icons/ReactIcon.png"
import PythonIcon from "../../assets/skill-icons/PythonIcon.png"
import SqlIcon from "../../assets/skill-icons/SqlIcon.png"
import GithubIcon from "../../assets/skill-icons/GithubIcon.svg"
import AdobexdIcon from "../../assets/skill-icons/AdobexdIcon.png"
import PhotoshopIcon from "../../assets/skill-icons/PhotoshopIcon.png"
import FigmaIcon from "../../assets/skill-icons/FigmaIcon.png"
import VscodeIcon from "../../assets/skill-icons/VscodeIcon.png"
import CppIcon from "../../assets/skill-icons/CppIcon.png"


const Skills = () => {
  return (
    <div className={styles.skills} id="skills">
      <div className={styles.skillsContainer}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Skills</h1>
          </div>

          <div className={styles.description}>
            <p>The skills I use in frontend development, data analytics and UI/UX design:</p>
          </div>

          <div className={styles.skillsIcons}>
            <div className={styles.skillIcon}>
              <img src={HtmlIcon} alt="" />
              <p>HTML5</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={CssIcon} alt="" />
              <p>CSS3</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={JavascriptIcon} alt="" />
              <p>JavaScript</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={ReactIcon} alt="" />
              <p>React</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={PythonIcon} alt="" />
              <p>Python</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={SqlIcon} alt="" />
              <p>SQL</p>
            </div>
          
            <div className={styles.skillIcon}>
              <img src={GithubIcon} alt="" />
              <p>Github</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={AdobexdIcon} alt="" />
              <p>Adobe XD</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={PhotoshopIcon} alt="" />
              <p>Photoshop</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={FigmaIcon} alt="" />
              <p>Figma</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={VscodeIcon} alt="" />
              <p>VS Code</p>
            </div>
            <div className={styles.skillIcon}>
              <img src={CppIcon} alt="" />
              <p>C++</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
