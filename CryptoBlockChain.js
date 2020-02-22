//by JoeK 21/02/20

class CryptoBlockchain{
    constructor(){
        this.blockchain = [this.startGenesisBlock()];     
    }//this method creates the initial block in my chain
    startGenesisBlock(){
        return new CryptoBlock(0, "21/02/2020", "Initial Block in the Chain", "0");
    }
    obtainLatestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock){ //setting a new block to contain hash of the previous one- so the current one will be the previous to a new one....
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();        
        this.blockchain.push(newBlock);
    }
}