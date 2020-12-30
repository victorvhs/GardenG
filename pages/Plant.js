import Layout from '../components/Layout'
import { Button, Input } from "@chakra-ui/react"
import React,{Component} from 'react'

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
      const res = await fetch('http://localhost:3000/api/hello?plant='+this.state.plant)
      const json = await res.json()
      json.data.forEach((item)=>{
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
          <div className="plantsInfo">
            <h1>Find a plant</h1>
          </div>
          <div className="formPlantsContainer">
            <form onSubmit={this.handlerInputChange} className='m-4 formPlants' >
              <label htmlFor="plant" className='font-normal text-3xl text-grey-darkest leading-loose my-3 w-full'>Search a plant</label>
                <Input
                name='plant'
                type='text'
                placeholder='Insert here'
                value={this.state.plant}
                onChange={this.handleChange}
                id='plant'
                className='rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
                />
            </form>
            <div className="plantsButton bg-purple">
                  <Button 
                    onClick={this.handlerInputChange}
                    className='appearance-none bg-indigo-200 text-white text-base font-semibold tracking-wide uppercase p-3 rounded shadow hover:bg-indigo-light'
                    >
                      Enter
                  </Button>
                  <Button 
                    onClick={this.handleClick}
                    className='appearance-none bg-indigo-200 text-white text-base font-semibold tracking-wide uppercase p-1 rounded shadow hover:bg-pink-500'
                    >Clear
                  </Button>
            </div>
          </div>
          <div className="ContainerCard">
          {this.state.obj}
          </div>
        </Layout>
    )

  }
    
}
export default About;