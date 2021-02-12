<template>
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
          <div class="card-header"><b>Enter your email to reset your password </b></div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit" >
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"><b>Email</b></label>

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
                    placeholder="ninja@gmail.com"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-success  ">Get link</button>
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

export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        confirmpassword: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      var users = []
      firebase.firestore().collection('users').get().then(snapshot => {
          snapshot.forEach(doc => {
              users.push(doc.id)
              if (users.includes(this.form.email)) {
                  firebase.auth().sendPasswordResetEmail(this.form.email)
                  this.$swal('Check your inbox for the reset link')
              } else {
                  this.$swal('This email doesnt exists!')
              }
          })
      })
      }
    }
}
</script>
<style>
body {
  background-image: url("../assets/crypto.jpg");

}
</style>
