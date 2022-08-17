import styles from "./index.module.css";

import PersonalLogo from "../../assets/personal-logos/Logo1.png";
import EnLogo from "../../assets/flags/UkFlag.png";
import TrLogo from "../../assets/flags/TurkeyFlag.png";
import dropdownIcon from "../../assets/other/dropdownIcon.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={PersonalLogo} alt="" />
        </div>

        <div className={styles.sections}>
          <ul className={click ? `${styles.nav} ${styles.active}` : `${styles.nav}`}>
            <li className={styles.sectionHeader}>
              <a href="/">Home</a>
            </li>
            <li className={styles.sectionHeader}>
              <a href="/">About</a>
            </li>
            <li className={styles.sectionHeader}>
              <a href="/">Skills</a>
            </li>
            <li className={styles.sectionHeader}>
              <a href="/">Experiences</a>
            </li>
            <li className={styles.sectionHeader}>
              <a href="/">Education</a>
            </li>
            <li className={styles.sectionHeader}>
              <a href="/">Projects</a>
            </li>
            <li className={styles.sectionHeader}>
              <a href="/">Contact</a>
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



          <div onClick={handleClick} className={styles.hamburger}>
            {click ? (
              <AiOutlineClose className={styles.hamburgerIcon} />
            ) : (
              <AiOutlineMenu className={styles.hamburgerIcon} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
