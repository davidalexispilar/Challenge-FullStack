let saveDb = require('./config')
let fs = require('fs')
let transfers = []
let consultTransfers =[]
let clients = [{
    name: "pepe",
    lastName: "perez",
    numberClient: "1",
    accounts: [
        {


            numberAccount: "872378326702",
            typeAccount: "Cuenta corriente",
        },
        {


            numberAccount: "872378326703",
            typeAccount: "Caja de ahorro",
        },
        {


            numberAccount: "872378326704",
            typeAccount: "Cuenta corriente",
        },
        {


            numberAccount: "872378326705",
            typeAccount: "Caja de ahorro",
        },
        {


            numberAccount: "872378326706",
            typeAccount: "Cuenta corriente",
        },
        {


            numberAccount: "872378326707",
            typeAccount: "Caja de ahorro",
        }

    ]
}, {
    name: "pepito",
    lastName: "Lopez",
    numberClient: "2",
    accounts: [
        {


            numberAccount: "872378326702",
            typeAccount: "Cuenta corriente",
        },
        {


            numberAccount: "872378326703",
            typeAccount: "Caja de ahorro",
        },
        {


            numberAccount: "872378326704",
            typeAccount: "Cuenta corriente",
        },
        {


            numberAccount: "872378326705",
            typeAccount: "Caja de ahorro",
        },
        {


            numberAccount: "872378326706",
            typeAccount: "Cuenta corriente",
        },
        {


            numberAccount: "872378326707",
            typeAccount: "Caja de ahorro",
        }

    ]
}
]
if (saveDb) {
    consultTransfers =  fs.readFileSync('./src/transfers.json', 'utf-8')
    if (consultTransfers) {
        
        consultTransfers =JSON.parse(consultTransfers);
    }
}

module.exports = {
    transfers,
    clients,
    consultTransfers,
} 
