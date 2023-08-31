const INITIAL_DIFFICULTY = 2;
const MINING_RATE=1; //1second = 1000ms
const GENESIS_DATA = {
    timestamp:1,
    prevHash: '0x000',
    hash: '0x123',
    nonce:0,
    difficulty: INITIAL_DIFFICULTY,
    data: []
}

module.exports = {GENESIS_DATA, MINING_RATE};