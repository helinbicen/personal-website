import ProjectSchema from "./ProjectSchema"

import coinSearchProject from "../../assets/projects/coinSearch.png"

const CoinSearch = () => {
  return (
    <div>
        <ProjectSchema 
            name="Coin Search"
            description="A web app for viewing top 10 coins of the current currency. View and get more info about each one of them."
            skill1= "React"
            skill2="CSS"
            skill3="API"
            link="https://github.com/helinbicen/crypto-currency-react"
            buttonText = "View on Github"
            photo1={coinSearchProject}
              
          
    />
    </div>
  )
}

export default CoinSearch