<template>
  <div class="container" style="padding-top:150px">
  <p id="days"></p>
    <p id="hours"></p>
    <p id="mins"></p>
    <p id="secs"></p>
    <h2 id="end"></h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header bg-success">Transfer to peers</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">SellerEmail</label>

                <div class="col-md-6">
                  <input
                    id="selleremail"
                    type="email"
                    class="form-control"
                    name="name"
                    placeholder="Ninja Brayo"
                    value
                    required
                    autofocus
                    v-model="form.selleremail"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">BuyerEmail</label>
                <div class="col-md-6">
                  <input
                    id="buyeremail"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    placeholder=" enter a legit email"
                    v-model="form.buyeremail"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">amount</label>

                <div class="col-md-6">
                  <input
                    id="transferamount"
                    type="number"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.transferamount"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-success">Transfer</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      form: {
        buyeremail: '',
        selleremail: '',
        transferamount: 0,
        sellerbal: 0,
        buyerbal: '',
        sellersphone: '',
        sellerid: ''
      },
      error: null
    }
  },
  methods: {
    addDays: function (date, days) {
      const copy = new Date(date)
      copy.setDate(date.getDate() + days)
      return copy
    },
    getBuyerBal: function (buyeremail) {
      var db = firebase.firestore()
      db.collection('users').doc(buyeremail).get().then(snapshot => {
        let bal = snapshot.data().shares
        return bal
      })
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
    },
    submit () {
      let db = firebase.firestore()
      let sellershares = this.sellerbal - this.form.transferamount
      let date = new Date()
      let maturedate = this.addDays(date, 2)
      if (this.form.transferamount <= this.sellerbal) {
        db.collection('users').doc(this.user.data.email).update({
          shares: sellershares
        })
        db.collection('users').doc(this.user.data.email).collection('records').add({
          amount: this.form.transferamount,
          date: Date(),
          party: this.form.buyeremail,
          transactionType: 'sell'
        })
        db.collection('users').doc(this.form.buyeremail).collection('records').add({
          amount: this.form.transferamount,
          date: Date(),
          party: this.sellersphone,
          transactionType: 'purchase'
        })
        db.collection('bids').add({
          dop: Date(),
          buyerid: this.form.buyeremail,
          sellerid: this.sellerid,
          amount: this.form.transferamount,
          status: 'transfered',
          paired: false,
          transferdate: '',
          sold: true,
          matureDate: maturedate
        })
        db.collection('users').doc(this.form.buyeremail).get().then(snapshot => {
          var buyerdata = snapshot.data().shares
          var newdata = parseFloat(this.form.transferamount) + parseFloat(buyerdata)
          let db = firebase.firestore()
          db.collection('users').doc(this.form.buyeremail).update({
            shares: newdata
          })
        })
        db.collection('users').doc(this.form.buyeremail).collection('messages').add({
          message: 'You have received',
          amount: this.form.transferamount,
          sender: this.sellerid
        })
        this.$swal('success')
      } else {
        this.$swal('insufficient balance')
      }
    }
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).get().then(snapshot => {
      this.sellerbal = snapshot.data().shares
      this.sellerid = snapshot.data().phonenumber
    })
    db.collection('users').doc(this.form.buyeremail).get().then(snapshot => {
      this.sellersphone = snapshot.data().phonenumber
    })
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
