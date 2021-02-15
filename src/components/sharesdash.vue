<template>
<v-app>

<section id="tabs" class="project-tab">
            <div class="container">
             <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">{{user.data.displayName}}</a></li>
            </ol>
          </nav>
                <div class="row">
                    <div class="col-md-12" style="padding:10px; width:10px">
                        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">PendingShares</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">RunningShares</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">MaturedShares</a>
                                 <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-pair" role="tab" aria-controls="nav-contact" aria-selected="false">Transactions </a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-refferal" role="tab" aria-controls="nav-contact" aria-selected="false">Refferals</a>
                                 <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-sell" role="tab" aria-controls="nav-contact" aria-selected="false">Sell Panel</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead >
                                        <tr>
                                            <th class="text-warning">Amount</th>
                                            <th class="text-info">Status</th>
                                            <th class="text-secondary">Paired!</th>
                                            <th class="text-danger">Period</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="share in share" :key="share.id">
                                            <td>{{share.amount}}</td>
                                            <td>{{share.status}}</td>
                                            <td >{{share.paired}}</td>
                                            <td>{{share.period}}Day(s)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                           <th class="text-warning">Amount</th>
                                            <th class="text-info">PurchaseDate</th>
                                            <th class="text-secondary">Timer</th>
                                            <th class="text-danger">Yields</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="running in  runningShares" :key="running">
                                            <td><a href="#">{{running.amount}}</a></td>
                                            <td>{{running.transferdate}}</td>
                                            <td>john@example.com</td>
                                            <td>{{running.amount}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-warning">Amount</th>
                                            <th class="text-info">SellerName</th>
                                            <th class="text-secondary">Mobile</th>
                                            <th class="text-danger">status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="#">Work 1</a></td>
                                            <td>Doe</td>
                                            <td>john@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 2</a></td>
                                            <td>Moe</td>
                                            <td>mary@example.com</td>
                                        </tr>
                                        <tr>
                                            <td><a href="#">Work 3</a></td>
                                            <td>Dooley</td>
                                            <td>july@example.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-pair" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-warning">Amount</th>
                                            <th class="text-info">Date</th>
                                            <th class="text-secondary">Seller/Buyer</th>
                                            <th class="text-danger">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="rec in rec" :key="rec">
                                            <td>{{rec.amount}}</td>
                                            <td>{{rec.date}}</td>
                                            <td>{{rec.party}}</td>
                                            <td>{{rec.transactionType}}</td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-sell" role="tabpanel" aria-labelledby="nav-contact-tab">
                              <div class="container-fluid" style="padding-top:150px; backgroundImage: { url('../assets/btc.jpg')}">
    <div class="row justify-content-center">
      <div class="col-md-6" style="background-color: transparent">
       <v-row justify="space-around">
    <v-icon
      large
      color="green darken-2"
    >
      mdi-domain
    </v-icon>
       </v-row>
        <div class="card">
          <div class="card-header bg-warning"><b>Peer-To-Peer Pair transfer</b></div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit" >
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"><b>Seller's Email</b></label>

                <div class="col-md-6">
                  <input
                    id="selleremail"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.selleremail"
                    placeholder="ninja@gmail.com"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"><b>Buyer's Email</b></label>

                <div class="col-md-6">
                  <input
                    id="buyeremail"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.buyeremail"
                    placeholder="ninja@gmail.com"
                  />
                </div>
              </div>
               <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right"><b>Amount</b></label>

                <div class="col-md-6">
                  <input
                    id="amount"
                    type="number"
                    class="form-control"
                    name="confirmpassword"
                    placeholder="Amount"
                    required
                    v-model="form.amount"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-warning">Transfer</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
                            </div>
                            <div class="tab-pane fade" id="nav-refferal" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-warning">Name</th>
                                            <th class="text-info">Number</th>
                                            <th class="text-secondary">Email</th>
                                            <th class="text-danger">Commission</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="invitee in invitees" :key="invitee.username">
                                      <td>{{invitee.username}}</td>
                                      <td>{{invitee.phone}}</td>
                                      <td>{{invitee.email}}</td>
                                      <td>20 ksh</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</v-app>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        sellermail: '',
        amount: '',
        sellerpassword: '',
        buyeremail: ''
      },
      phoneNumber: '',
      share: [],
      pairs: [],
      invitees: [],
      runningShares: [],
      msg: 'Welcome to Your Vue.js App',
      time: '',
      publickey: '',
      error: null,
      sellersbal: 0,
      rec: []
    }
  },
  methods: {
    rdrsell: function (event) {
      var db = firebase.firestore()
      db.collection('users').doc(this.user.data.email).collection('pairs').add({
        peer1: this.user.data.email
      })
    },
    submit () {
      var db = firebase.firestore()
      if (this.form.amount <= this.sellersbal) {
        db.collection('users').doc(this.form.buyeremail).collection('transactions').doc(this.form.amount).update({
          paired: true,
          status: 'pending',
          transferdate: Date()
        })
        let residue = this.sellersbal - this.form.amount
        db.collection('users').doc(this.user.data.email).update({
          shares: residue
        })
        let usershare = this.form.amount
        db.collection('users').doc(this.form.buyeremail).update({
          shares: usershare
        })
        db.collection('users').doc(this.form.buyeremail).collection('records').add({
          date: Date(),
          transactionType: 'purchase',
          amount: this.form.amount,
          party: this.user.data.email
        })
        db.collection('users').doc(this.user.data.email).collection('records').add({
          date: Date(),
          transactionType: 'sale',
          party: this.form.buyeremail
        })
        this.$swal('you transferred' + '   ' + this.form.amount + '   ' + 'to' + ' ' + this.form.buyeremail)
      } else {
        this.$swal('insufficient balance')
      }
    }
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).collection('transactions').where('paired', '==', false).get().then(snapshot => {
      snapshot.forEach(doc => {
        this.share.push(doc.data())
      })
    })
    db.collection('shares').doc('transactions').collection('sells').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.pairs.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.invitees.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('transactions').where('paired', '==', true).get().then(snapshot => {
      snapshot.forEach(doc => {
        this.runningShares.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('records').get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
        this.rec.push(doc.data())
      })
    })
  },
  updated () {
    var db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      const doc = snapshot.data()
      this.phoneNumber = doc.phonenumber
      this.balance = doc.balance
      this.shares = doc.shares
    })
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      this.sellersbal = snapshot.data().shares
    })
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.project-tab {
    padding: 10%;
    margin-top: -8%;
}
.project-tab #tabs{
    background: #007b5e;
    color: #eee;
}
.project-tab #tabs h6.section-title{
    color: #eee;
}
.project-tab #tabs .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: #0062cc;
    background-color: transparent;
    border-color: transparent transparent #f3f3f3;
    border-bottom: 3px solid !important;
    font-size: 16px;
    font-weight: bold;
}
.project-tab .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    color: #0062cc;
    font-size: 16px;
    font-weight: 600;
}
.project-tab .nav-link:hover {
    border: none;
}
.project-tab thead{
    background: #f3f3f3;
    color: #333;
}
.project-tab a{
    text-decoration: none;
    color: #333;
    font-weight: 600;
}
 @import url("//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css");
</style>
