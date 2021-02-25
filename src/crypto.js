const EC = require('elliptic').ec
const ec = new EC('secp256k1')
const {BlockChain,Transaction} = require('./blockchain.js')

const myKey = ec.keyFromPrivate('958b17655da077c04d9a55c86b59d7e8704bafc040f6925bf48a6e23ab58a43e')
const myWalletAddress = myKey.getPublic('hex')


let ninjaCoin = new BlockChain()


const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10)
tx1.signTransaction(myKey)
ninjaCoin.addTransaction(tx1)


console.log('/n Starting a miner')
ninjaCoin.minePendingTransaction(myWalletAddress)
console.log('/n Starting a miner')
ninjaCoin.minePendingTransaction(myWalletAddress)
console.log('/n Starting a miner')
ninjaCoin.minePendingTransaction(myWalletAddress)

console.log('balance'+ ninjaCoin.getBalanceOfAddress(myWalletAddress))
// console.log(JSON.stringify(ninjaCoin,null,4))
console.log(ninjaCoin.isChainValid())