import {Container } from "@chakra-ui/react"
import { FaBeer, FaEnvira, FaMoneyBillWave, FaSearchDollar, FaUserSecret } from 'react-icons/fa'
import Cards from './Cards'
export default function MainContent(){
  return(
    <Container>
      <div className="title">
        <h1>GargenG, Your helper for gardening</h1>
      </div>
      <div className="description">
        <p>
        GardenG will help you with information on how to grow your beautiful plants in the best possible way.
        Information about the time of flowers, fruits, soil conditions and many more.
        </p>
      </div>
      <div className="CardsContainer">
        <Cards 
        description="Without login, none of your information will be saved on the servers. 100% privacy." 
        icon={<FaUserSecret/>}/>
        <Cards
        description="Information on various species of plants.
        From all parts of Planet Earth."
        icon={<FaEnvira/>}
        />
        <Cards
        description="All free and easy to access."
        icon={<FaSearchDollar/>}
        />
      </div>

    </Container>
    )
}