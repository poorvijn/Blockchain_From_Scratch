const Block = require('./block');
const cryptoHash = require('./crypto-hash');

class Blockchain{
    constructor(){
        this.chain = [Block.genesis()];
    }

    addBlock({ data }){
        const newBlock = Block.mineBlock({
            prevBlock: this.chain[this.chain.length-1],
            data
        });
        this.chain.push(newBlock);
    }

    static isValidChain(chain){
        if(JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis())){
            return false;
        }

        for(let i = 1; i<chain.length; i++){
            const {timestamp, prevHash, hash, data, nonce, difficulty} = chain[i];
            const realLastHash = chain[i-1].hash;
            if(prevHash!==realLastHash) return false;

            const validatedHash = cryptoHash(timestamp, prevHash, data, nonce, difficulty);
            if(hash!=validatedHash) return false;
        }
        return true;
    }

    replaceChain(chain)
    {
        if(chain.length<=this.chain.length)
        {
            console.error("The incoming chain is not longer");
            return;
        }

        if(!Blockchain.isValidChain(chain)){
            console.error("The incoming chain is not valid");
            return;
        }

        this.chain=chain;
    }
}

const blockchain =  new Blockchain();
blockchain.addBlock({data:"first block after genesis"});
blockchain.addBlock({data:"second block after genesis"});
const result = Blockchain.isValidChain(blockchain.chain);

console.log(blockchain);
console.log(result);