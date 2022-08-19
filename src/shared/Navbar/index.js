import styles from "./index.module.css";

import PersonalLogo from "../../assets/personal-logos/Logo1.png";
import EnLogo from "../../assets/flags/UkFlag.png";
import TrLogo from "../../assets/flags/TurkeyFlag.png";
import dropdownIcon from "../../assets/other/dropdownIcon.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [navClick, setNavClick] = useState(false);
  const handleNavClick = () => setNavClick(!navClick);

  const [sectionClick, setSectionClick] = useState(false);
 

  return (
    <BrowserRouter>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="#" smooth>
                      <div className={styles.logo}>
            <img src={PersonalLogo} alt="" />
          </div>
          </Link>


          <div className={styles.sections}>
            <ul
              className={
                navClick ? `${styles.nav} ${styles.active}` : `${styles.nav}`
              }
            >
              <li
                className={
                  sectionClick === 0
                    ? `${styles.sectionHeader} ${styles.sectionActive}`
                    : `${styles.sectionHeader}`
                }
                onClick={() => setSectionClick(0)}
              >
                <Link to="#home" smooth>
                  Home
                </Link>
              </li>
              <li
                className={
                  sectionClick === 1
                    ? `${styles.sectionHeader} ${styles.sectionActive}`
                    : `${styles.sectionHeader}`
                }
                onClick={() => setSectionClick(1)}
              >
                <Link to="#about" smooth>
                  About
                </Link>
              </li>
              <li
                className={
                  sectionClick === 2
                    ? `${styles.sectionHeader} ${styles.sectionActive}`
                    : `${styles.sectionHeader}`
                }
                onClick={() => setSectionClick(2)}
              >
                <Link to="#skills" smooth>
                  Skills
                </Link>
              </li>
              <li
                className={
                  sectionClick === 3
                    ? `${styles.sectionHeader} ${styles.sectionActive}`
                    : `${styles.sectionHeader}`
                }
                onClick={() => setSectionClick(3)}
              >
                <Link to="#experiences" smooth>
                  Experiences
                </Link>
              </li>
              <li
                className={
                  sectionClick === 4
                    ? `${styles.sectionHeader} ${styles.sectionActive}`
                    : `${styles.sectionHeader}`
                }
                onClick={() => setSectionClick(4)}
              >
                <Link to="#education" smooth>
                  Education
                </Link>
              </li>
              <li
                className={
                  sectionClick === 5
                    ? `${styles.sectionHeader} ${styles.sectionActive}`
                    : `${styles.sectionHeader}`
                }
                onClick={() => setSectionClick(5)}
              >
                <Link to="#projects" smooth>
                  Projects
                </Link>
              </li>
              <li
                className={
                  sectionClick === 6
                    ? `${styles.sectionHeader} ${styles.sectionActive}`
                    : `${styles.sectionHeader}`
                }
                onClick={() => setSectionClick(6)}
              >
                <Link to="#contact" smooth>
                  Contact
                </Link>
              </li>

              <div className={styles.languageSelection}>
                <div className={styles.currentLanguage}>
                  <span className={styles.languageIcon}>
                    <img src={EnLogo} alt="" />
                  </span>
                  <span className={styles.dropdownIcon}>
                    <img src={dropdownIcon} alt="" />
                  </span>
                </div>
              </div>

              <div className={styles.languageDropdown}>
                <div className={styles.languageDropdownList}>
                  <span className={styles.languageIcon}>
                    <img src={TrLogo} alt="" />
                  </span>
                </div>
              </div>
            </ul>

            <div onClick={handleNavClick} className={styles.hamburger}>
              {navClick ? (
                <AiOutlineClose className={styles.hamburgerIcon} />
              ) : (
                <AiOutlineMenu className={styles.hamburgerIcon} />
              )}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navbar;
