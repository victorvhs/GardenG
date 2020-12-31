// Trefle recommended library to fetch data
//const fetch = require('node-fetch')
import Cors from "cors"
import initMiddleware from "../../lib/init-mid"

const cors = initMiddleware(
  Cors({
    methods: ['GET','POST'],
  })
)


export default async (req, res) => {
  const {
    query: {plant},
    method,
  }= req

  await cors(req,res)
  let resp, json

  switch (method){
    case 'GET': 
      if (!req.query.plant){
        res.statusCode=400;
        res.json({error:'You must provide a plant name'})
        return
      }
      const query = req.query.plant;
      resp = await fetch('https://trefle.io/api/v1/plants/search/?token='+process.env.TOKEN_TREFLE+'&q='+query)
      json = await resp.json()
      break
    case 'POST':   
      if (!req.body.id){
        res.statusCode=400;
        res.send('You must provide a id plant')
        return
      }
      const idPlant = req.body.id
      resp = await fetch('https://trefle.io/api/v1/species/'+idPlant+'/?token='+process.env.TOKEN_TREFLE)
      json = await resp.json()
      break
    default:
      res.statusCode = 404
      res.send('not available')
      return
  }
  res.statusCode = 200
  res.json(json)
}
