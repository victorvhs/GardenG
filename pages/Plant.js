import Layout from '../components/Layout'
//import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React,{Component} from 'react'
const fetch = require('node-fetch')
import PlantCards from '../components/PlantCards';
import data from '../temp_db/data'
class About extends React.Component{
  constructor(){
    super()
    this.state = {
      plant:"",
      respPlant:"",
      obj: "",
    }
    this.handlerInputChange = this.handlerInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  
  async handlerInputChange (event) {
      event.preventDefault()
      let elm = []
      data.forEach((item)=>{
        elm.push( <PlantCards data={item}/>)
      })
      this.setState({obj:elm})

      return
  }
  
  handleChange(event){
    const {name,value} = event.target
    this.setState({[name]:value})
  }
  handleClick(){
    this.setState({obj:''})
    console.log('clear')
  }
  render(){
 
    return(
        <Layout>
          <h1>Find a plant</h1>
          <p>Insert a plant, specie or popular name</p>
          <form onSubmit={this.handlerInputChange}>
              <input
              name='plant'
              type='text'
              placeholder='Insert here'
              value={this.state.plant}
              onChange={this.handleChange}
              />
                <button type='submit' h='1.75rem' size='sm'  >
                  enter
                </button>
          </form>
                <button onClick={this.handleClick}>Clear</button>
          <div className="ContainerCard">
          {this.state.obj}
          </div>
        </Layout>
    )

  }
    
}
export default About;