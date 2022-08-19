import styles from "./index.module.css";

const ProjectSchema = (props) => {
  const showButton = props.showButton;

  return (
    <div className={styles.projects}>
      <div className={styles.projectsContainer}>
        <div className={styles.content}>
          <div className={styles.project}>
            <div className={styles.header}>
              <h1>{props.pageHeader}</h1>
            </div>
            <div className={styles.projectName}>
              <h2>{props.name}</h2>
            </div>
            <div className={styles.projectDescription}>
              <h3>{props.description}</h3>
            </div>
            <div className={styles.usedSkills}>
              <p>{props.skill1}</p>
              <p>{props.skill2}</p>
              <p>{props.skill3}</p>
              <p>{props.skill4}</p>
            </div>

            {(() => {
              if (showButton === false) {
                return (
                  <div className={styles.warning}>
                    <p>This is a private project.</p>
                  </div>
                );
              } else if (showButton === true) {
                return (
                  <button className={styles.viewRepo}>
                    <a target="_blank" rel="noreferrer" href={`${props.link}`}>
                      {props.buttonText}
                    </a>
                  </button>
                );
              }
            })()}
          </div>
          <div className={styles.projectPhoto}>
            <img src={`${props.photo1}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSchema;
