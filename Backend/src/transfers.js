let saveDb = require('./config')
let fs = require('fs')
let { transfers } = require('./db')
let algo
const generateTransfers = (origin, destination, amount, number) => {
    if (saveDb) {
        fs.readFile('./src/transfers.json', 'utf-8', function (err, doc) {
            if (doc) {
                transfers = JSON.parse(doc)
            }
           
            transfers.push(
                {
                    client: number,
                    origin: origin,
                    destination: destination,
                    amount: amount
                })
            let data = JSON.stringify(transfers)

            fs.writeFile('./src/transfers.json', data, function (err, document) {
                if (err) {
                    console.log(err);
                } 

            })
            return transfers
        })
    } else {
        transfers.push(
            {
                client: number,
                origin: origin,
                destination: destination,
                amount: amount
            })
    }





}



module.exports = {
    generateTransfers,
    transfers
}