const {GENESIS_DATA} = require('./config');
const cryptoHash = require('./crypto-hash');

class Block{
    constructor({timestamp,prevHash,hash,data, nonce, difficulty})
    {
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.hash=hash;
        this.data=data;
        this.nonce=nonce;
        this.difficulty=difficulty;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({prevBlock, data})
    {
        let hash, timestamp;
        const prevHash = prevBlock.hash;
        const { difficulty } = prevBlock;
        let nonce=0;
        do{
            nonce++;
            timestamp=Date.now();
            hash=cryptoHash(timestamp, prevHash, data, difficulty, nonce);
        }while(hash.substring(0,difficulty)!== "0".repeat(difficulty));

        return new this({
            timestamp,
            prevHash,
            data,
            difficulty,
            nonce,
            hash
        });
    }
}

// const block1 = new Block({
//     data:"hello",
//     prevHash:"0",
//     hash:"0xac",
//     timestamp:"28/08/23"
// });

module.exports = Block;

// console.log(block1);
// const genesisBlock = Block.genesis();
// console.log(genesisBlock);
// const newBlock = Block.mineBlock({prevBlock:genesisBlock, data:"new block"});
// console.log(newBlock);