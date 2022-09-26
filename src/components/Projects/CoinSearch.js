import ProjectSchema from "./ProjectSchema";

import coinSearchProject from "../../assets/projects/coinSearch.png";

const CoinSearch = () => {
  return (
    <div>
      <ProjectSchema
        name="Coin Search"
        description="A web app for viewing top 10 coins of the current currency. View and get more info about each one of them."
        skill1="React"
        skill2="CSS"
        skill3="API"
        repoLink="https://github.com/helinbicen/crypto-currency-react"
        repoButtonText="View on Github"
        photo1={coinSearchProject}
        showRepo={true}
        showWebsite={false}
      />
    </div>
  );
};

export default CoinSearch;
