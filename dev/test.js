const Blockchain = require('../dev/blockchain');

const bitcoin = new Blockchain();

//

const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
const nonce = 100;

const currentBlockData = [
    {
        amount: 10,
        sender: 'B4CEE9C0E5CD571',
        recipient: 'CATF6E462D48E9',  
    }, 
    {
        amount: 20,
        sender: 'B4CEE9C0E5CD571',
        recipient: 'Vija3F6E462D48E9',  
    },
    {
        amount: 30,
        sender: 'B4CEE9C0E5CD571',
        recipient: 'COWF6E462D48E9',  
    }  
]

//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));


//bitcoin.createNewBlock(101,'OIUOEREDHK101D','b84a0745fae979b744827304e66dcd5f');
//bitcoin.createNewBlock(102,'OIUOEREDHKHKD102','78s97d4x6dsf');

//bitcoin.createNewBlock(789457,'OIUOEDJETH8754DHKD','78SHNEG45DER56');

//bitcoin.createNewTransaction(100,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HT8NG9');
//bitcoin.createNewBlock(548764,'AKMC875E6S1RS9','WPLS214R7T6SJ3G2');

//bitcoin.createNewTransaction(50,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HT8NG9');
//bitcoin.createNewTransaction(150,'BolexHT845SJ5TKCJ2','JOHN5BG5DF6HT8NG9');
//bitcoin.createNewTransaction(200,'ROlexT845SJ5TKCJ2','AMBER5BG5DF6HT8NG9');
//bitcoin.createNewTransaction(250,'TubeEX845SJ5TKCJ2','HEARD5BG5DF6HT8NG9');

//bitcoin.createNewBlock(1111,'VJ2020875E6S1RS9','SURI121314R7T6SJ3G2');

//console.log(bitcoin.chain[2]);

console.log(bitcoin);
//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce ));
