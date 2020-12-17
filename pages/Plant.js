import Layout from '../components/Layout'
import { Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from 'react'
export default function About(){

  const [plant,setPlant] = useState("")

  const handlerInputChange = (event) =>{
    setPlant(event.target.value)
    console.log(plant)
    if (event.target.value.length+1 >= 3){
      
    }
  }
  return(
      <Layout>
        <h1>Find a plant</h1>
        <p>Insert a plant, specie or popular name</p>
        <Text>Plant: {plant}</Text>
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
      </Layout>
  )
}