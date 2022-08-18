import styles from "./index.module.css";

const Education = () => {
  return (
    <div className={styles.education}>
      <div className={styles.educationContainer}>
        <div className={styles.content}>
          <div className={styles.university}>
            <div className={styles.header}>Education</div>
            <div className={styles.title}>
              <p>Istanbul University</p> 
              <p>Bachelor’s Degree, Computer Engineering</p>
            </div>
            <div className={styles.otherDetails}>
              <p>Sep 2021 - Jun 2025</p>

              <p>Istanbul, Turkey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
