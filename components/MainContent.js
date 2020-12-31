import { FaBeer, FaEnvira, FaMoneyBillWave, FaSearchDollar, FaUserSecret } from 'react-icons/fa'
import Cards from './Cards'
export default function MainContent(){
  return(
    <div className='container relative mx-auto'>
      <div className="title">
        <h1>GardenG<span>Your helper for gardening</span></h1>
      </div>
      <div className="description">
        <p>
        GardenG will help you with information on how to grow your beautiful plants.
        </p>
      </div>
      <div className="relative flex flex-row" >
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

    </div>
    )
}