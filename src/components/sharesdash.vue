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
                    <div class="col-md-12">
                        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">PendingShares</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">MaturedShares</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Transactions & earnings</a>
                                 <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-pair" role="tab" aria-controls="nav-contact" aria-selected="false">Pair</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-sell" role="tab" aria-controls="nav-contact" aria-selected="false">Sell Panel</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
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
                                            <td>{{share.paired}}</td>
                                            <td>{{share.period}} Day(s)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
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
                                            <th class="text-warning">Sellerid</th>
                                            <th class="text-info">Amount</th>
                                            <th class="text-secondary">Mobile</th>
                                            <th class="text-danger">Pair</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="pair in pairs" :key="pair">
                                            <td><a href="#">{{pair.sellermail}}</a></td>
                                            <td>{{pair.amount}}</td>
                                            <td>{{pair.phoneNumber}}</td>
                                            <td><button class="btn btn-danger">Pair</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-sell" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div class="card">
          <div class="card-header">Please generate tokens to sell your shares</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit" >
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Amount</label>

                <div class="col-md-6">
                  <input
                    id="amount"
                    type="number"
                    class="form-control"
                    name="amount"
                    required
                    v-model="form.amount"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-success  ">Find A Pair</button>
                </div>
              </div>
            </form>
          </div>
        </div>
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
let encrypt = require('quick-encrypt')
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        sellermail: '',
        amount: ''
      },
      phoneNumber: '',
      share: [],
      pairs: [],
      msg: 'Welcome to Your Vue.js App',
      time: '',
      publickey: '',
      error: null
    }
  },
  methods: {
    submit () {
      let keys = encrypt.generate(1024)
      let publickey = keys.public
      let privatekey = keys.private
      let crypttext = encrypt.encrypt('enrpypted by hustle bidders', publickey)
      let db = firebase.firestore()
      db.collection('shares').doc('transactions').collection('sells').add({
        crypttext: crypttext,
        amount: this.form.amount,
        sellermail: this.user.data.email,
        privatekey: privatekey,
        phoneNumber: this.phoneNumber
      })
      this.$swal('Request Queued ')
    }
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('shares').doc('transactions').collection('buys').where('buyerid', '==', this.user.data.email).get().then(snapshot => {
      snapshot.forEach(doc => {
        this.share.push(doc.data())
      })
    })
    db.collection('shares').doc('transactions').collection('sells').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.pairs.push(doc.data())
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
</style>
