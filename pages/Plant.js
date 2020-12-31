import Layout from '../components/Layout'
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
            <h1 className="text-4xl">Find a plant</h1>
          </div>
          <div className="float-none">
            <form onSubmit={this.handlerInputChange} className='m-4 formPlants' >
              <label htmlFor="plant" 
              className='
                font-normal 
                text-xl 
                text-grey-darkest 
                leading-loose 
                my-3 
                w-full'>
                  Search a plant
                </label>
                <input
                name='plant'
                type='text'
                placeholder='Insert here'
                value={this.state.plant}
                onChange={this.handleChange}
                id='plant'
                className=' 
                p-4 
                ml-4 
                border-b 
                text-gray-800 
                border-gray-200 
                bg-white
                text-base'
                />
                  <button 
                    onClick={this.handlerInputChange}
                    className='appearance-none 
                    bg-indigo-200 
                    text-white 
                    text-base 
                    font-semibold 
                    tracking-wide 
                    uppercase 
                    p-4
                    ml-9 
                    rounded 
                    shadow 
                    hover:bg-indigo-400'
                    >
                      Enter
                  </button>
                  <button 
                    onClick={this.handleClick}
                    className='appearance-none 
                    bg-indigo-200 
                    text-white 
                    text-base 
                    font-semibold 
                    tracking-wide 
                    uppercase 
                    p-4
                    ml-5 
                    rounded 
                    shadow 
                    hover:bg-pink-500'
                    >Clear
                  </button>
            </form>
          </div>
          <div className="grid md:grid-cols-3 md:gap-4 sm:grid-cols-2">
          {this.state.obj}
          </div>
        </Layout>
    )

  }
    
}
export default About;