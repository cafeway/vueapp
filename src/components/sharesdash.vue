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
                                        <tr v-for="share in share" :key="share.amount">
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
                            <div class="tab-pane fade" id="nav-sell" role="tabpanel" aria-labelledby="nav-contact-tab">
                            <form>
  <div class="form-row">
    <div class="form-group col-md-10">
      <label for="inputEmail4">Generate a sell code</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="">
      <hr>
      <button type="submit" class="btn btn-primary">GetCode</button>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
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
      share: [],
      msg: 'Welcome to Your Vue.js App',
      time: '',
      usermail: ''
    }
  },
  updated: function () {
    console.log('updated')
    console.log(this.user.data.email)
  },
  keygen: function (event) {
    
  },
  mounted: function () {
    var db = firebase.firestore()
    db.collection('users').doc(this.user.data.email).collection('buyeraccount').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.share.push(doc.data())
      })
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
