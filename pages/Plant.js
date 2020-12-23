import Layout from '../components/Layout'
import { Button, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import React,{Component} from 'react'

const fetch = require('node-fetch')
import PlantCards from '../components/PlantCards';
class About extends React.Component{
  constructor(){
    super(props)
    this.state = {plant:""}
    this.handlerInputChange = this.handlerInputChange.bind(this)
  }

    handlerInputChange = async (event) =>{
    setPlant(event.target.value)
    
    if (event.target.value.length+1 >= 3){
      const response = await fetch('http://localhost:3000/api/hello?plant='+event.target.value.length);
       this.state.plant = await response.json();
      for (let i in plants.data){
        console.log(plants.data[i].id)
      }
      
    }
  }
  render(){
    return(
        <Layout>
          <h1>Find a plant</h1>
          <p>Insert a plant, specie or popular name</p>
          <InputGroup size='md'>
            <Input
            pr='4.5rem'
            type='text'
            placeholder='Insert here'
             onChangeCapture={handlerInputChange}
            />
            <InputRightElement width='4.5rem'>
              <button type='submit' h='1.75rem' size='sm'  >
                enter
              </button>
            </InputRightElement>
          </InputGroup>
    
          <hr/>
          <div className="ContainerCard">
          </div>
        </Layout>
    )

  }
    
}
export default About;