<template>
<v-app id="app">
<div class="container">
    <div class="main-body">
    <!-- Breadcrumb -->
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"><b>hustlebidders</b></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/sharesdash">Profile<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/sell">Sell Shares<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href='https://t.me/hustlerbidders'>Telegram</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href='https://chat.whatsapp.com/HU3wvCqjXmJ0J0OMSPndyJ'>Whatapp</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="" v-on:click="logout()"><b>Logout</b></a>
      </li>
    </ul>
  </div>
</nav>
<hr>
          <!-- /Breadcrumb -->
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card text-white bg-primary">
                <div class="card-header">UserProfile</div>
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>{{user.data.displayName}}</h4>
                      <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModalCenter">
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
                <div class="card-header text-white bg-success">Time Left Till Next Bid</div>
              <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2"></i></h6>
                      <h3 id="demo" class="text-primary"><b>Time left to next Bid</b></h3>
                    </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3 bg-dark">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3 text-white">
                      <h6 class="mb-0">Username</h6>
                    </div>
                    <div class="col-sm-9 text-white">
                      {{user.data.displayName}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3 text-white">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-white">
                    {{user.data.email}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3 text-white">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-white">
                      {{phoneNumber}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3 text-white">
                      <h6 class="mb-0">Balance</h6>
                    </div>
                    <div class="col-sm-9 text-white">
                      {{balance}}
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3 text-white">
                      <h6 class="mb-0">Your Shares</h6>
                    </div>
                    <div class="col-sm-9 text-white">
                      {{shares}}
                    </div>
                  </div>
                   </div>
              </div>
              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                  <div class="card-header bg-danger text-white"><b>Bid</b></div>
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">available shares</i>{{availableshares}}</h6>
                      <form>
                      <div class="mb-3">
                        <input type="number" name="days" required="required"  v-model="form.days" class="form-control" id="days"  aria-describedby="emailHelp" placeholder="number of days to the bids maturity">
                      </div>
                      <hr>
                      <div class="mb-3">
                      <input type="number" class="form-control" id="amount" placeholder="enter your bid amount" required="required" name="amount" v-model="form.amount">
                      </div>
                     <div class="mb-3 form-check">
                     </div>
                     <div class="form-group">
                     <button type="button" class="btn btn-danger" v-on:click="submit()">Buy and Pair</button>
                     </div>
                   </form>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">YourData</i> and current Status</h6>
                      <ul class="list-group">
                      <li class="list-group-item list-group-item-success"> Refferal Money ksh:
                         <span class="badge">{{refferalMoney}}</span>  </li>
                       <li class="list-group-item list-group-item-info"><a href="/sharesdash">PendingShares</a></li>
                      <li class="list-group-item list-group-item-warning"><a href="/sharesdash">Matured Shares</a></li>
                      <li class="list-group-item list-group-item-light"><button type="button"   class="btn btn-primary" value="Messages">Messages<span class="badge badge-light">{{messages}}</span>
                      <div class="modal fade" id="exampleModalScrollabl" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ol v-for="inb in inbox" :key="inb.id">
        <p>{{inb.message + inb.amount}}</p>
        </ol>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</button>
</li>
                  </ul>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Sell Your Shares</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="row">
    <div class="col">
      <input type="" id="sharesOnSale" class="form-control" placeholder="amount you wish to sell">
    </div>
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"><a v-on:click="logout"><router-link :to="{ path: '/' }">Logout</router-link></a></button>
      </div>
    </div>
  </div>
</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</v-app>
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
      availableshares: 0,
      shares: 0,
      refferalMoney: 0,
      date: '',
      form: {
        amount: 0,
        days: 0,
        sharesOnSale: 0
      },
      inbox: '',
      messages: 0
    }
  },
  created: function () {
  },
  updated: function () {
    this.countdown()
    console.log('updated')
    var db = firebase.firestore()
    var user = firebase.auth().currentUser
    db.collection('users').doc(this.user.data.email).collection('messages').get().then(snapshot => {
      this.inbox.push(snapshot.data())
      this.messages = snapshot.size
    })
    db.collection('users').doc(user.email).get().then(snapshot => {
      const doc = snapshot.data()
      this.phoneNumber = doc.phonenumber
      this.balance = doc.balance
      this.shares = doc.shares
    })
    db.collection('shares').doc('available').get().then(snapshot => {
      let data = snapshot.data()
      this.availableshares = data.total
    })
    db.collection('users').doc(user.email).collection('invitees').get().then(snapshot => {
      this.refferalMoney = snapshot.size * 20
    })
  },
  methods: {
    countdown: function () {
      var countDownDate = new Date('Jan 5, 2022 15:37:25').getTime()
      var x = setInterval(() => {
        var now = new Date().getTime()
        var distance = countDownDate - now

        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)
        document.getElementById('demo').innerHTML = days + 'd ' + hours + 'h' + minutes + 'm' + seconds + 's'
        if (distance < 0) {
          clearInterval(x)
          document.getElementById('demo').innerHTML = 'Expired'
        }
      }, 1000)
    },
    submit () {
      var db2 = firebase.firestore()
      var db = firebase.firestore().collection('shares').doc('available')
      db.get().then(snapshot => {
        let date = new Date()
        console.log(date.getDate())
        var data = snapshot.data()
        if (data.total >= 0) {
          let residue = data.total - this.form.amount
          db2.collection('bids').add({
            dob: Date(),
            buyerid: this.phoneNumber,
            buyeremail: this.user.data.email,
            sellerid: '',
            amount: this.form.amount,
            status: 'pending',
            paired: false,
            period: this.form.days,
            dop: '',
            phone: this.phoneNumber,
            transferdate: '',
            sold: false
          })
          db2.collection('users').doc(this.user.data.email).collection('records').add({
            amount: this.form.amount,
            date: Date(),
            party: this.user.data.email,
            transactionType: 'bid'
          })
          console.log(residue)
          db.update({total: residue})
          this.$swal('you bought ' + '  ' + this.form.amount + '  ' + ' Buy to activate')
          this.$router.push('/sharesdash')
        } else {
          this.$swal('The shares have run out....try again later')
        }
      })
    },
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
    logout: function (event) {
      firebase.auth().signOut()
      this.$router.push('/')
    },
    genaratelink () {
      var urlgenerator = require('urlgenerator')
      var createURLwithParameters = urlgenerator.createURLwithParameters
      var baseURL = 'https://hustlerbidders.netlify.com/register'
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

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
