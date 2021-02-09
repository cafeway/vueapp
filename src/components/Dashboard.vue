<template>
<div class="container">
    <div class="main-body">
    <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a v-on:click="redirect()" href="javascript:void(0)">Whatsapp</a></li>
               <li class="breadcrumb-item " aria-current="page"><a v-on:click="redirecttg()"><router-link :to="{ path: '/' }">Telegram</router-link></a></li>
               <li class="breadcrumb-item " aria-current="page"><a v-on:click="logout"><router-link :to="{ path: '/' }">Logout</router-link></a></li>
            </ol>
          </nav>
          <!-- /Breadcrumb -->
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{user.data.displayName}}</h4>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                         Invite Friends
                      </button>

                      <!-- Modal -->
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                   <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                   <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLongTitle">Share this link for rewards</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p id = "link" class=" text text-success">{{invitelink}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" v-on:click="genaratelink()" >Generate link</button>
      </div>
    </div>
  </div>
</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
              <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">Deposit</i></h6>
                      <form>
                        <div class="form-group">
                          <input type="amount" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter amount e.g ksh 500">
                          <small id="emailHelp" class="form-text text-muted">Note transaction fees inclusive</small>
                        </div>
                        <div class="form-group">
                          <input type="email" class="form-control" id="till" aria-describedby="emailHelp" placeholder="till number : 5674451 ">
                        </div>
                        <div class="form-group">
                        <button type="button" class="btn btn-success" v-on:click="Pay" >Lipa na Mpesa</button>
                      </div>
                      </form>
                    </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Username</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{user.data.displayName}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-success">
                    {{user.data.email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-danger">
                      {{phoneNumber}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Balance</h6>
                    </div>
                    <div class="col-sm-9 text-info">
                      {{balance}}
                    </div>
                  </div>
                   </div>
              </div>
              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">buy shares</i>{{availableshares}}</h6>
                      <form>
                         <div class="mb-3">
    <input type="email" class="form-control" id="days"  aria-describedby="emailHelp" placeholder="number of days to the bids maturity">
  </div>
  <hr>
  <div class="mb-3">
    <input type="password" class="form-control" id="amount" placeholder="enter your bid amount">
  </div>
  <div class="mb-3 form-check">

  </div>
  <button type="submit" class="btn btn-success">Buy</button>
</form>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style="height: 5px">
                        <div class="progress-bar bg-primary" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
// const Mpesa = require('mpesa-api').Mpesa
// const credentials = {
//   clientKey: 'PzYKGrQDH8C75CkzOhn9QEUwNVuKAmpI',
//   clientSecret: 'h8mZA8Z5zdjgCYge',
//   initiatorPassword: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
//   securityCredential: 'W0lMwNhtwOU3vBnHrrNJUYzr6tKSuIOCZTCCeE4wQ/OE0iTvXoY8Al/EwhHqydzvDh/V7MYXMQ+NFoxbeTTIF4BBW8MnVi6W3TyTUBi9k1Ip9YO5r5Mnjf9PuThgchppO60CgBbCNP0wSfEsmrgqD0L4SIAMHeWQX6DpR7g1RuPQCrmmhU5OTA1fa0dvk3KPb1b8/Fzgh7PscGQV8V2AyDeA3HkL/AHKqUaC3tS7l99AivAoqpeT7N3RtgIiDMiKFa5APPQGYvaOqy1QjduYz9auCneMQOEoQHOoh5yAnj1RmUXjOoiPjtYZF9jk0Us/FseKxbHJwft9BTyzcwu1Mg==',
//   certificatePath: 'keys/example.cert'
// }
// const environment = 'production'
// const mpesa = new Mpesa(credentials, environment)
export default {
  data () {
    return {
      phoneNumber: '',
      email: '',
      balance: 0,
      maturedShares: '',
      invitelink: '',
      previewLink: '',
      availableshares: 0
    }
  },
  updated: function () {
    console.log('updated')
    var db = firebase.firestore()
    var user = firebase.auth().currentUser
    db.collection('users').doc(user.email).get().then(snapshot => {
      const doc = snapshot.data()
      this.phoneNumber = doc.phonenumber
      this.balance = doc.balance
    })
    // db.collection('users').doc(user.email).get().then(snapshot => {
    //   const doc = snapshot.data()
    //   this.phoneNumber = doc.phonenumber
    //   this.balance = doc.balance
    // })
  },
  methods: {
    Pay: function (event) {
      // mpesa.b2c({
      //   Initiator: 'Initiator Name',
      //   Amount: 1000 /* 1000 is an example amount */,
      //   PartyA: 'Party A',
      //   PartyB: 'Party B',
      //   QueueTimeOutURL: 'Queue Timeout URL',
      //   ResultURL: 'Result URL'
      // })
      //   .then((response) => {
      //     console.log(response)
      //   })
      //   .catch((error) => {
      //     console.error(error)
      //   })
      alert('under maintainance')
    },
    redirect: function (event) {
      window.location = 'https://chat.whatsapp.com/HU3wvCqjXmJ0J0OMSPndyJ'
    },
    redirecttg: function (event) {
      window.location = 'https://t.me/hustlerbidders'
    },
    logout: function () {
      if (firebase.auth().signOut()) {
        window.location = '/'
      }
    },
    genaratelink () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://hustlerbidders.netlify.com/refferals'
      var useremail = firebase.auth().currentUser.email
      var parameters = {'email': useremail}
      var finalURL = createURLwithParameters(baseURL, parameters)
      console.log('final URL is ', finalURL)
      const url = require('url')
      let urlObject = url.parse(finalURL, true)
      console.log(urlObject.host)
      let queryData = urlObject.query
      console.log(queryData.email)
      this.invitelink = finalURL
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
<style>
body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
.my-card
{
    position:absolute;
    left:40%;
    top:-20px;
    border-radius:50%;
}
</style>
