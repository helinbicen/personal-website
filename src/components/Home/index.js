import styles from "./index.module.css";
import MeHome from "../../assets/my-photos/MeHome.jpeg";
import Typical from "react-typical";
import dropdownIcon from "../../assets/other/dropdownIcon.svg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <div className={styles.photo}>
            <img src={MeHome} alt="" />
          </div>

          <div className={styles.mainDescription}>
            <h1>
              Hi, I am Helin Biçen |{" "}
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
              Computer Engineering Student 💻
            </h3>
            <h3 className={styles.descriptionItem}>Software Developer 🚀</h3>
            <h3 className={styles.descriptionItem}>UI/UX Enthusiast 😍</h3>
            <h3 className={styles.descriptionItem}>Freelancer 👩‍💻</h3>
          </div>
        </div>
        
      </div>

      <div className={styles.redirect}>
        <img src={dropdownIcon} alt="" />
      </div>
    </div>
  );
};

export default Home;
