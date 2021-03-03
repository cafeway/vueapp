<template>
  <section id="tabs" class="project-tab">
            <h5><b>{{this.user.data.displayName}}</b></h5>
            <hr>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav>
                            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Your bids</a>
                                <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Running Bids</a>
                                <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Matured bids</a>
                                 <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-refferals" role="tab" aria-controls="nav-contact" aria-selected="false">FindPairs</a>
                                 <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-records" role="tab" aria-controls="nav-contact" aria-selected="false">Records</a>
                            </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-secondary">Amount</th>
                                            <th class="text-success">Date of bid</th>
                                            <th class="text-warning">Period</th>
                                            <th class="text-danger">Paired</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="pending in pending" :key="pending.id">
                                            <td><a href="#">{{pending.amount}}</a></td>
                                            <td>{{pending.dob}}</td>
                                            <td>{{pending.period}}</td>
                                            <td>Paired to Till: 5674451 </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-secondary">Amount</th>
                                            <th class="text-success">Status</th>
                                            <th class="text-warning">Seller</th>
                                            <th class="text-danger">Confirmation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="running in running" :key="running.id">
                                            <td><a href="#">{{running.amount}}</a></td>
                                            <td>{{running.status}}</td>
                                            <td>{{running.sellerid}}</td>
                                            <td>{{running.status}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Date</th>
                                            <th>interest</th>
                                            <th>Paired</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                                  <div class="tab-pane fade" id="nav-refferals" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-secondary">UserName</th>
                                            <th class="text-success">Phone</th>
                                            <th class="text-warning">Amount</th>
                                            <th class="text-danger">Pair</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="sel in sellers" :key="sel">
                                            <td><a href="#">{{sel.username}}</a></td>
                                            <td>{{sel.phonenumber}}</td>
                                            <td>{{sel.shares}}</td>
                                            <td><button  type="button" v-on:click="sendPair(sel.email)" class="btn btn-warning">Send Pair Request</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="tab-pane fade" id="nav-refferals" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-secondary">UserName</th>
                                            <th class="text-success">Email</th>
                                            <th class="text-warning">Phone</th>
                                            <th class="text-danger">Award</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="ref in refferals" :key="ref">
                                            <td><a href="#">{{ref.username}}</a></td>
                                            <td>{{ref.email}}</td>
                                            <td>{{ref.phone}}</td>
                                            <td>20ksh</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                             <div class="tab-pane fade" id="nav-records" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <table class="table" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th class="text-secondary">Amount</th>
                                            <th class="text-success">Date</th>
                                            <th class="text-danger">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="rec in records" :key="rec">
                                            <td><a href="#">{{rec.amount}}</a></td>
                                            <td>{{rec.date}}</td>
                                            <td>{{rec.transactionType}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  data () {
    return {
      sellerbal: 0,
      pending: [],
      running: [],
      matured: [],
      refferals: [],
      records: [],
      sellers: [],
      pairRequestSendersNumber: 0,
      sellerEmail: ''
    }
  },
  methods: {
    sendPair: function (email) {
      this.$swal('pair request sent')
      let db = firebase.firestore()
      db.collection('users').doc(email).collection('messages').add({
        message: 'You Have sent A Pair Request',
        buyer: this.pairRequestSendersNumber,
        buyerwalletAddress: this.user.data.email
      })
      console.log(email)
    },
    confirmbuy: function (mail) {
      var db = firebase.firestore()
      db.collection('bid').where('sold', '==', false, 'buyeremail', '==', mail).update({
        paired: true
      })
    },
    addDays: function (date, days) {
      const copy = new Date(date)
      copy.setDate(date.getDate() + days)
      return copy
    },
    rdrtosell: function (event) {
      this.$router.push('/sell')
    },
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
    }
  },
  mounted: function () {
    let db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      this.pairRequestSendersNumber = snapshot.data().phonenumber
    })
    db.collection('users').where('MaturedShares', '>', 0).get().then(snapshot => {
      snapshot.forEach(doc => {
        this.sellers.push(doc.data())
      })
    })
    db.collection('bids').where('buyeremail', '==', this.user.data.email, 'paired', '==', false, 'sold', '==', 'no').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.pending.push(doc.data())
      })
    })
    db.collection('bids').where('sold', '==', true, 'buyeremail', '==', this.user.data.email, 'status', '==', 'transfered').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.running.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('invitees').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.refferals.push(doc.data())
      })
    })
    db.collection('users').doc(this.user.data.email).collection('records').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.records.push(doc.data())
      })
    })
  },
  updated: function () {
    let db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      this.sellerbal = snapshot.data().shares
    })
  }

}
</script>
<style scoped>
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
