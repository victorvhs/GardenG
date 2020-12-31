import { FaBeer, FaEnvira, FaMoneyBillWave, FaSearchDollar, FaUserSecret } from 'react-icons/fa'
import Cards from './Cards'
export default function MainContent(){
  return(
    <div className="flex flex-col flex-wrap">
      <div className="flex-1">
        <h1 
          className="
            font-bold
            text-center
            text-4xl
            text-green-900"
          >
            GardenG
          </h1>
          <p
          className="
            text-center
            text-3xl
            text-green-800">
            GardenG will help you with information on how to grow your beautiful plants.
          </p>
      </div>
      <div className="flex md:flex-row sm:flex-col sm:flex-wrap" >
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