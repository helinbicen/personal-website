import ProjectSchema from "./ProjectSchema";

import toDo from "../../assets/projects/toDo.png";

const ToDo = () => {
  return (
    <div>
      <ProjectSchema
        name="To-Do App"
        description="A web app for creating to-do lists."
        skill1="React"
        skill2="CSS"
        skill3="API"
        repoLink="https://github.com/helinbicen/to-do-react"
        repoButtonText="View on Github"
        photo1={toDo}
        showRepo={true}
        showWebsite={false}
      />
    </div>
  );
};

export default ToDo;
