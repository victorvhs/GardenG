import React from 'react'
import Link from 'next/link'

function PlantCards(props) {
  const data = props.data
  const id = data.id
  
  const  getSpecies= async () =>{
    const resp = await fetch('/api/hello',{
      method: "POST",
      body: JSON.stringify({"id":id}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
         }
    })
    const retorno = await resp.json()
  }
  
  return(
    <div className='PlantCard'>
      <p>
        <label>{data.common_name}</label>
      </p>
      <p>
        <label>{data.slug}</label>
      </p>
      <p>
        <label>{data.scientific_name} </label>
      </p>
      <figure>
        <img src={data.image_url} alt={data.common_name} />
        <figcaption>{data.bibliography}</figcaption>
      </figure>
      <button onClick={getSpecies} className='
      w-full 
      h-12 
      px-6 
      text-indigo-100 
      transition-colors 
      duration-150 
      bg-indigo-700 
      rounded-lg 
      focus:shadow-outline 
      hover:bg-indigo-800'>More information</button>
    </div>
  )
}

export default PlantCards