const SHA256 = require('crypto-js/sha256')
class Transaction {
    constructor(fromAddress,toAddress,amount){
        this.fromAddress = fromAddress
        this.toAddress = toAddress
        this.amount =amount
    }
}
class Block {
    constructor(timestamp,transactions,previousHash='') {
        this.timestamp = timestamp
        this.transactions = transactions
        this.previousHash = previousHash
        this.hash = this.calculateHash()
        this.nonce = 0
    }
    calculateHash () {
        return SHA256(this.index +this.timestamp+this.previousHash+JSON.stringify(this.transactions)+this.nonce).toString()
    }
    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty)!== Array(difficulty+1).join("0")){
            this.nonce++
            this.hash = this.calculateHash()
        }
        console.log("block mined" + this.hash)
    }
    
}

class BlockChain {
    constructor () {
        this.chain = [this.createGenesisBlock()]
        this.difficulty = 2
        this.pendingTransactions = []
        this.miningReward = 1000
    }
    createGenesisBlock () {
        return new Block("2/21/2021","Genesis Block","0")
    }
    getLatestBlock () {
        return this.chain[this.chain.length -1]
    }
    minePendingTransaction(miningRewardAddress){
        let block = new Block(Date.now(),this.pendingTransactions)
        block.mineBlock(this.difficulty)

        console.log('block successfully mined')
        this.chain.push(block)
        this.pendingTransactions = [
            new Transaction(null,miningRewardAddress,this.miningReward)
        ]
    }

    createTransaction (transaction){
        this.pendingTransactions.push(transaction)
    }

    getBalanceOfAddress(address){
        let balance =0 
        for(const block of this.chain){
            for(const trans of block.transactions){
                if(trans.fromAddress ===address){
                    balance == tran.amount
                }
                if(trans.toAddress === address){
                    balance == trans.amount
                }
            }
        }
        return balance
    }
    isChainValid () {
        for (let i = 1; i<this.chain.length; i++){
            const currentBlock = this.chain[i]
            const previousblock = this.chain[i-1]

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false
            }
            if(currentBlock.previousHash !== previousblock.hash){
                return false
            }
            return true
        }
    }
}

let ninjaCoin = new BlockChain()
ninjaCoin.createTransaction(new Transaction('adrress1','address2',100))
ninjaCoin.createTransaction(new Transaction('adrress2','address1',50))

console.log('/n Starting a miner')
ninjaCoin.minePendingTransaction('ninjasAddress')

console.log('\n Starting miner again')
ninjaCoin.minePendingTransaction('ninjasAddress')

console.log('balance'+ ninjaCoin.getBalanceOfAddress('ninjasAddress'))
// console.log(JSON.stringify(ninjaCoin,null,4))