import React from 'react'

function PlantCards(props) {
  const data = props.data
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
        <img src={data.image_url} alt={data.common_name}/>
        <figcaption>{data.bibliography}</figcaption>
      </figure>
    </div>
  )
}

export default PlantCards