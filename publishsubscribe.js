const redis = require('redis');

const CHANNELS = {
    TEST:'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN'
}

class PubSub{
    constructor({blockchain}){
        this.blockchain = blockchain;
        this.publisher = redis.createClient();
        this.subscriber = redis.createClient();

        this.subscriber.subscribe(CHANNELS.TEST);

        this.subscriber.on('message', (channel,message)=>this.handleMessage(channel,message));
    }
    
    handleMessage(channel,message){
        console.log(`Message received. Channel ${channel} and Message ${message}`);
    }
}

module.exports = PubSub;
// const checkPubSub = new PubSub();
// setTimeout(()=>checkPubSub.publisher.publish(CHANNELS.TEST,"hello !"),1000);