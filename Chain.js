//by JoeK 22/02/20
const SHA256 = require('crypto-js/sha256');
class CryptoBlock{
    constructor(index, timestamp, data, precedingHash=" "){
     this.index = index;
     this.timestamp = timestamp;
     this.data = data;
     this.preHash = precedingHash;
     this.hash = this.computeHash();     
    }
    computeHash(){
        return SHA256(this.index + this.preHash + this.timestamp + JSON.stringify(this.data)).toString();
    }   
}

class CryptoBlockchain{
    constructor(){
        this.blockchain = [this.startGenesisBlock()];     
    }//this method creates the initial block in my chain
    startGenesisBlock(){
        return new CryptoBlock(0, "21/02/2020", "Initial Block in the Chain", "0");
    }
    obtainLatestBlock(){
        return this.blockchain[this.blockchain.length-1];
    }
    addNewBlock(newBlock){ //setting a new block to contain hash of the previous one- so the current one will be the previous to a new one....
        newBlock.preHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();        
        this.blockchain.push(newBlock);
    }
    
}





let smashingCoin = new CryptoBlockchain();
smashingCoin.addNewBlock(new CryptoBlock(1, "21/02/2020", {sender: "Jasper Carrot", recipient: "Barnardo Silva", quantity: 50}));
smashingCoin.addNewBlock(new CryptoBlock(2, "22/02/2020", {sender: "Benson Henderson", recipient: "Timothy Traore", quantity: 100}) );
smashingCoin.addNewBlock(new CryptoBlock(3, "22/02/2020", {sender: "Michael Jordan", recipient: "Jimmy Jones", quantity: 223}) );
console.log(JSON.stringify(smashingCoin, null, 4));
//console.log("The size of the blockchain is "+smashingCoin.CryptoBlock);
