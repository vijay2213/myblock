var express = require('express')
var app = express()
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');
import { v4 as uuidv4 } from 'uuid';

const Blockchain = require('../dev/blockchain');

const nodeAddress = uuid().split('-').join('');
const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.get('/', function (req, res) {
 res.send('Hello coding Javascript')
});
 
app.get('/blockchain', function (req, res) {
    res.send(bitcoin);
});

app.post('/transaction', function(req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount,
        req.body.sender, req.body.recipient)
        res.json({ note:`Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function(req, res) {
   
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
      
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
      };
    
      const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
      const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    bitcoin.createNewTransaction(12.5, "00", nodeAddress);
    res.json({
        note: "New block mined successfully",
        block: newBlock
      });

});

app.listen(3000, function() {
    console.log('listenining on port 3000....');

});