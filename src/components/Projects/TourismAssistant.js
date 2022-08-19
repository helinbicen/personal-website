import ProjectSchema from "./ProjectSchema";

import Assistant1 from "../../assets/projects/Assistant1.jfif";
import Assistant3 from "../../assets/projects/Assistant3.jfif";

import { useState } from "react";

const TourismAssistant = () => {
  return (
    <div id="projects">
      <ProjectSchema
        pageHeader="Projects"
        name="Tourism Assistant"
        description="A website for attracting tourists to Turkey. The purpose is making the best trip list for them via getting trip theme, category, date & location info. Became 5th of TEKNOFEST'22."
        skill1="React"
        skill2="CSS"
        skill3="API"
        skill4="Figma"
        buttonText="This is a private project"
        photo1={Assistant3}
        showButton={false}
      />
    </div>
  );
};

export default TourismAssistant;
