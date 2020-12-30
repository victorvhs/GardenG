import React from 'react'
function PlantCards(props) {
  const data = props.data
  const id = data.id
  
  /*TODO Criar layout para os detalhes da especie
    TODO Criar logica para falta de imagens e falta de informações
    TODO Criar função para converter o nome do pais em uma bandeira
    FIXME Corrigir alerta de erro por falta da key
    FIXME Contrante da cor de fundo
    FIXME Colocar o site da api, porta e endereço de resolução local com variável de ambiente.
  */
  
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
      <button onClick={getSpecies}>More information</button>
    </div>
  )
}

export default PlantCards