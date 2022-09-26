import ProjectSchema from "./ProjectSchema";

import rickAndMorty from "../../assets/projects/rickAndMorty.png";

const RickAndMorty = () => {
  return (
    <div>
      <ProjectSchema
        name="Rick and Morty"
        description="A web app for viewing planets and its citizens of TV series called Rick and Morty. View and get more info about characters."
        skill1="React"
        skill2="CSS"
        skill3="API"
        repoLink="https://github.com/helinbicen/rick-and-morty"
        repoButtonText="View on Github"
        photo1={rickAndMorty}
        showRepo={true}
        websiteButtonText="View Website"
        websiteLink="https://hb-rick-and-morty.netlify.app"
        showWebsite={true}
      />
    </div>
  );
};

export default RickAndMorty;
