import Layout from '../components/Layout'
import { Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from 'react'

const fetch = require('node-fetch')
import PlantCards from '../components/PlantCards';
export default function About(){

  const [plant,setPlant] = useState("")

  const handlerInputChange = async (event) =>{
    setPlant(event.target.value)
    
    
    if (event.target.value.length+1 >= 3){
      const response = await fetch('http://localhost:3000/api/hello?plant='+event.target.value.length);
      const json = await response.json();
      console.log(json);
      
    }
  }
  return(
      <Layout>
        <h1>Find a plant</h1>
        <p>Insert a plant, specie or popular name</p>
        <InputGroup size='md'>
          <Input
          pr='4.5rem'
          type='text'
          placeholder='Insert here'
          onChange={handlerInputChange}
          />
          <InputRightElement width='4.5rem'>
            <Button type='submit' h='1.75rem' size='sm' >
              enter
            </Button>
          </InputRightElement>
        </InputGroup>

        <hr/>
        <div className="ContainerCard">
          <PlantCards/>
          <PlantCards/>
          <PlantCards/>
          <PlantCards/>
  
          <PlantCards/>
          <PlantCards/>
          <PlantCards/>
          <PlantCards/>

          <PlantCards/>
          <PlantCards/>
          <PlantCards/>
          <PlantCards/>
        </div>
      </Layout>
  )
}