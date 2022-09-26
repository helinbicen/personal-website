import ProjectSchema from "./ProjectSchema";

import momentumProject from "../../assets/projects/momentumProject.png";

const Momentum = () => {
  return (
    <div>
      <ProjectSchema
        name="Momentum Clone"
        description="A web app which provides temperature of Istanbul, the current time and a quote."
        skill1="React"
        skill2="CSS"
        skill3="API"
        repoLink="https://github.com/helinbicen/momentum-clone-react"
        repoButtonText="View on Github"
        photo1={momentumProject}
        showRepo={true}
        showWebsite={false}
      />
    </div>
  );
};

export default Momentum;
