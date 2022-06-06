const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
  'oolong':{
    'type': 'black',
    'origin': 'yo mommas house',
    'waterTemp': '200',
    'steepTimeSeconds': '180',
    'caffeinated': true,
    'flavor': 'delicious',
  },
  'matcha':{
    'type': 'green',
    'origin': 'yo mommas house',
    'waterTemp': '200',
    'steepTimeSeconds': '180',
    'caffeinated': true,
    'flavor': 'delicious',
  },
  'unknown':{
    'type': 'unknown',
    'origin': 'unknown',
    'waterTemp': 'unknown',
    'steepTimeSeconds': 'unknown',
    'caffeinated': true,
    'flavor': 'unknown',
  }
  
}

// So below we have a server thats up to hear a git request that will return HTML if its the main route.

app.get('/', (request, response)=>{
  response.sendFile(__dirname + '/index.html')
})

// And now below we have an API that's set up to hear a git request for the api route and when it hears that return JSON. We can call this anything, but chose "api" for app.get('.api' so that's why it's named that. Test this next part in Postman to see the object)

app.get('/api/:name', (request, response)=>{
  const teaName = request.params.name.toLowerCase()
  if( tea[teaName] ){
    response.json(tea[teaName])
  }else{
    response.json(tea['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on port ${PORT}! Better go catch it!`)
})