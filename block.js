const {GENESIS_DATA} = require('./config');
const cryptoHash = require('./crypto-hash');

class Block{
    constructor({timestamp,prevHash,hash,data})
    {
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.hash=hash;
        this.data=data;
    }

    static genesis() {
        return new this(GENESIS_DATA);
    }

    static mineBlock({prevBlock, data})
    {
        const timestamp = Date.now();
        const prevHash = prevBlock.hash;
        return new this({
            timestamp,
            prevHash,
            data,
            hash: cryptoHash(timestamp, prevHash, data)
        });
    }
}

const block1 = new Block({
    data:"hello",
    prevHash:"0",
    hash:"0xac",
    timestamp:"28/08/23"
});

module.exports = Block;

// console.log(block1);
// const genesisBlock = Block.genesis();
// console.log(genesisBlock);
// const newBlock = Block.mineBlock({prevBlock:genesisBlock, data:"new block"});
// console.log(newBlock);