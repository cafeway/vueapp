<template>
  <div class="container" style="padding-top:150px">
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
        buyerbal: 0,
        mail: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      let db = firebase.firestore()
      let sellershares = this.sellerbal - this.form.transferamount
      if (this.form.transferamount <= this.sellerbal) {
        db.collection('users').doc(this.user.data.email).update({
          shares: sellershares
        })
        db.collection('users').doc(this.form.buyeremail).update({
          shares: this.form.transferamount
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
          party: this.form.buyeremail,
          transactionType: 'purchase'
        })
        db.collection('users').doc(this.form.buyeremail).collection('transactions').add({
          dop: Date(),
          buyerid: this.form.buyeremail,
          sellerid: this.form.selleremail,
          amount: this.form.transferamount,
          status: 'transfered',
          paired: true,
          transferdate: '',
          sold: false
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
    })
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  }
}
</script>
