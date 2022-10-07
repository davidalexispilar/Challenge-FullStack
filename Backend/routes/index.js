var express = require('express');
var router = express.Router();
let db = require('../src/db')
let transfers = require('../src/transfers')

router.get('/accountsLogin', (req, res) => {
  console.log(req.query.number);
  let client = db.clients.filter((client) => {
    return client.numberClient === req.query.number
  })
  res.send(client)
})
router.get('/account', (req, res) => {
  console.log(req.query.number);
  let client = db.clients.filter((client) => {
    return client.numberClient === req.query.number
  })
  res.send(client)

})
router.get('/transfer', (req, res) => {
   console.log(db.consultTransfers) 
   if (db.consultTransfers) {
    let data = db.consultTransfers.filter((client)=>{
            return client.client == req.query.number
      
    })
     res.send(
      {
        status:200,
        data
      }
      )

   }else{
    res.send(
      {
        status:400,
        message:"No hay trnaferencias echas"
      }
      )
   }
  
})
router.post('/transfers', (req, res) => {
  console.log(req.body.client);
  transfers.generateTransfers(req.body.accountOrigin, req.body.accountDestination, req.body.amount,req.body.client)

  res.send({
    status:200,
    message:'Transfencia exitosa',
     })
})

module.exports = router;
