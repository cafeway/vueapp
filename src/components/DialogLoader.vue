<template>
  <div class="container-fluid">
  <form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Email</label>
    <input type="text" readonly class="form-control-plaintext" v-model="nextbid" id="nextbid" value="25/12/1990" placeholder="Jan 5, 2022 15:37:25">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Set</button>
</form>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      form: {
        nextbid: ''
      }
    }
  },
  methods: {
    submit: function () {
      var db = firebase.firestore()
      db.collection('timer').doc('next').add({
        tickdate: this.form.nextbid
      })
    }
  }
}
</script>
