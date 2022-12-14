import styles from "./index.module.css";
import MeHome from "../../assets/my-photos/MeHome.jpeg";
import Typical from "react-typical";
import dropdownIcon from "../../assets/other/dropdownIcon.svg";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Home = () => {
  return (
    <BrowserRouter>
      <div className={styles.home} id="home">
        <div className={styles.homeContainer}>
          <div className={styles.content}>
            <div className={styles.photo}>
              <img src={MeHome} alt="" />
            </div>

            <div className={styles.mainDescription}>
              <h1>
                Hi, I am Helin BiΓ§en |{" "}
                <Typical
                  steps={[
                    "Frontend Developer",
                    3000,
                    "",
                    500,
                    "Data Analyst",
                    3000,
                    "",
                    500,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </h1>
            </div>

            <div className={styles.otherDescription}>
              <h3 className={styles.descriptionItem}>
                Computer Engineering Student π»
              </h3>
              <h3 className={styles.descriptionItem}>Software Developer π</h3>
              <h3 className={styles.descriptionItem}>UI/UX Enthusiast π</h3>
              <h3 className={styles.descriptionItem}>Freelancer π©βπ»</h3>
            </div>
          </div>
        </div>

        <Link to="#about" smooth>
          <div className={styles.redirect}>
            <img src={dropdownIcon} alt="" />
          </div>
        </Link>
      </div>
    </BrowserRouter>
  );
};

export default Home;
