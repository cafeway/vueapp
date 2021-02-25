const EC = require('elliptic').ec
const ec = new EC('secp256k1')


const key = ec.genKeyPair()
const publickey = key.getPublic('hex')
const privatekey = key.getPrivate('hex')

console.log()
console.log(privatekey + 'private key')

console.log()
console.log(publickey + 'public key')