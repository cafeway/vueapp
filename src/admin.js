const admin = require('firebase-admin')
const parser =  require('body-parser')
var serviceAccount = require("./key.json")
const firebase = require('firebase')
var path = require('path')
var public = path.join(__dirname, 'public')
const Router = require('express')
const router = Router()
const functions = require('firebase-functions');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://hustlebidders-default-rtdb.firebaseio.com"
  });
var express = require('express');
var app = express();
app.use(express.static('/public'))
app.get('/', function(req,res){
    res.sendFile(path.join(public, 'admin.html'))
})
const listAllUsers = (nextPageToken) => {
    var records = [];
    // List batch of users, 1000 at a time.
    admin
      .auth()
      .listUsers(1000, nextPageToken)
      .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
        //   console.log('user', userRecord.toJSON());
        records.push(userRecord.email);
        console.log(records)
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch((error) => {
        console.log('Error listing users:', error);
      });


  };
  var user = []
  admin.auth().getUsers().then((result) => {
      result.users.forEach((user))
  })
  // Start listing users from the beginning, 1000 at a time.
module.exports ={
    api :functions.https.onRequest(listAllUsers())
}
app.listen(3000)
