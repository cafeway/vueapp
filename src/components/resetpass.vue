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
          <div class="card-header"><b>Reset your password</b></div>
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

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right"><b>Password</b></label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                    placeholder="password"
                  />
                </div>
              </div>
               <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right"><b>Confirm Password</b></label>

                <div class="col-md-6">
                  <input
                    id="confirmpassword"
                    type="password"
                    class="form-control"
                    name="confirmpassword"
                    placeholder="confirm your password"
                    required
                    v-model="form.confirmpassword"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-success  ">Reset</button>
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
        password: '',
        confirmpassword: ''
      },
      error: null
    }
  },
  methods: {
    submit () {
      let user = firebase.auth().currentUser
      console.log(user)
      if (this.form.password !== this.form.confirmpassword) {
        this.$swal('Your passwords dont match')
      } else {
        user.updatePassword(this.form.password).then(function () {
          this.$swal('Password Updated')
        })
      }
    }
  }
}
</script>
<style>
body {
  background-image: url("../assets/crypto.jpg");

}
</style>
