import ProjectSchema from "./ProjectSchema";

import littleLemon from "../../assets/projects/littleLemon.png";

const LittleLemon = () => {
  return (
    <div>
      <ProjectSchema
        name="Little Lemon"
        description="This imaginary restaurant was created for finishing Meta Frontend Developer Professional Certificate"
        skill1="React"
        skill2="CSS"
        skill3="API"
        repoLink="https://github.com/helinbicen/meta-frontend-dev-capstone"
        repoButtonText="View on Github"
        photo1={littleLemon}
        websiteButtonText="View Website"
        websiteLink="https://meta-frontend-dev-capstone-theta.vercel.app"
        showRepo={true}
        showWebsite={true}
      />
    </div>
  );
};

export default LittleLemon;
