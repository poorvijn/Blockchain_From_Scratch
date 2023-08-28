class Block{
    constructor({timestamp,prevHash,hash,data})
    {
        this.timestamp=timestamp;
        this.prevHash=prevHash;
        this.hash=hash;
        this.data=data;
    }
}

const block1 = new Block({
    data:"hello",
    prevHash:"0",
    hash:"0xac",
    timestamp:"28/08/23"
});

console.log(block1);