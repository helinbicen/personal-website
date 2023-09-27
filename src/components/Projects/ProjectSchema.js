import styles from "./index.module.css";
import { pushDataToDataLayer } from "../../utils/gtm";

const ProjectSchema = (props) => {
  const showRepo = props.showRepo;
  const showWebsite = props.showWebsite;
  const projectName = props.name;

  const projectsPageData = {
    event: "inspect-projects",
    page: "projects",
    projectName: projectName,
    inspectedWebsite: showWebsite ? showWebsite : "no website",
    inspectedRepo: showRepo ? showRepo : "no repo",
  };

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
              if (showRepo === false) {
                return (
                  <div className={styles.warning}>
                    <p>This is a private project.</p>
                  </div>
                );
              } else if (showRepo === true) {
                return (
                  <button className={styles.viewRepo}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${props.repoLink}`}
                      onClick={() => {
                        setTimeout(() => {
                          pushDataToDataLayer(projectsPageData);
                        }, 2000);
                      }}
                    >
                      {props.repoButtonText}
                    </a>
                  </button>
                );
              }
            })()}

            {(() => {
              if (showWebsite === false) {
                return <div></div>;
              } else if (showWebsite === true) {
                return (
                  <button className={styles.viewWebsite}>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${props.websiteLink}`}
                      onClick={() => {
                        setTimeout(() => {
                          pushDataToDataLayer(projectsPageData);
                        }, 2000);
                      }}
                    >
                      {props.websiteButtonText}
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
