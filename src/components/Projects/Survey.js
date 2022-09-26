import ProjectSchema from "./ProjectSchema";

import SurveyProject from "../../assets/projects/survey.png";

const Survey = () => {
  return (
    <div>
      <ProjectSchema
        name="Trip Survey"
        description="A website for determining the trip choices of tourists and collecting data for our artificial intelligence algorithm. Entegrated with tourism assistant project that I mentioned above."
        skill1="React"
        skill2="CSS"
        skill3="API"
        skill4="Figma"
        repoLink=""
        repoButtonText="This is a private project"
        photo1={SurveyProject}
        showRepo={false}
        showWebsite={true}
        websiteButtonText="View Website"
        websiteLink="https://wdata.ieeeiuc.com/survey"
      />
    </div>
  );
};

export default Survey;
