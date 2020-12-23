import React from 'react'

function PlantCards(props) {
  const data = {
    "data": [
      {
        "id": 107328,
        "common_name": "Purple threeawn",
        "slug": "aristida-purpurea",
        "scientific_name": "Aristida purpurea",
        "year": 1835,
        "bibliography": "Trans. Amer. Philos. Soc., n.s., 5: 145 (1835)",
        "author": "Nutt.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Grass family",
        "genus_id": 645,
        "image_url": "https://d2seqvvyy3b8p2.cloudfront.net/f098f7d15a04aedee2bfb8e98c1c2fb0.jpg",
        "synonyms": [
          "Aristida roemeriana",
          "Aristida purpurea var. perplexa",
          "Aristida purpurea var. laxiflora",
          "Aristida brownii",
          "Aristida berlandieri",
          "Aristida purpurea var. aequiramea",
          "Aristida filipendula",
          "Aristida purpurea var. micrantha",
          "Aristida purpurea var. berlandieri",
          "Aristida micrantha",
          "Aristida purpurea f. brownii",
          "Aristida purpurea var. californica",
          "Aristida muhlenbergioides",
          "Aristida longiseta var. hookeri",
          "Aristida fasciculata var. californica",
          "Aristida aequiramea",
          "Aristida fasciculata var. micrantha",
          "Aristida purpurea var. capillarifolia",
          "Aristida fasciculata var. hookeri",
          "Aristida breviseta",
          "Aristida purpurea var. hookeri",
          "Aristida eggersii"
        ],
        "genus": "Aristida",
        "family": "Poaceae",
        "links": {
          "self": "/api/v1/species/aristida-purpurea",
          "plant": "/api/v1/plants/aristida-purpurea",
          "genus": "/api/v1/genus/aristida"
        }
      },
      {
        "id": 1131041,
        "common_name": "Wolf apple",
        "slug": "solanum-lycocarpum",
        "scientific_name": "Solanum lycocarpum",
        "year": 1833,
        "bibliography": "Voy. Distr. Diam. 1(2): 333 (1833)",
        "author": "A.St.-Hil.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Potato family",
        "genus_id": 4329,
        "image_url": "https://bs.floristic.org/image/o/e2c5d39907edb2a854abc405a2ebd2ae5f349971",
        "synonyms": [
          "Solanum grandiflorum var. pulverulentum",
          "Solanum lycocarpum var. paraguariense",
          "Solanum grandiflorum f. paraguariensis",
          "Solanum lycocarpum subsp. macrophyllum",
          "Solanum grandiflorum var. macrocarpum",
          "Solanum lycocarpum var. macrocarpum",
          "Solanum grandiflorum f. apaense",
          "Solanum grandiflorum var. angustifolium",
          "Solanum lycocarpum var. genuinum",
          "Solanum lycocarpum var. decalvatum"
        ],
        "genus": "Solanum",
        "family": "Solanaceae",
        "links": {
          "self": "/api/v1/species/solanum-lycocarpum",
          "plant": "/api/v1/plants/solanum-lycocarpum",
          "genus": "/api/v1/genus/solanum"
        }
      }
    ],
    "links": {
      "self": "/api/v1/plants/search?q=3",
      "first": "/api/v1/plants/search?page=1&q=3",
      "next": "/api/v1/plants/search?page=2&q=3",
      "last": "/api/v1/plants/search?page=401&q=3"
    },
    "meta": {
      "total": 8011
    }
  }

  return(
    <div className='PlantCard'>
      <p>
        <label>{data.data[0].common_name}</label>
      </p>
      <p>
        <label>{data.data[0].slug}</label>
      </p>
      <p>
        <label>{data.data[0].scientific_name} </label>
      </p>
      <figure>
        <img src={data.data[0].image_url} alt={data.data[0].common_name}/>
        <figcaption>{data.data[0].bibliography}</figcaption>
      </figure>
    </div>
  )
}

export default PlantCards