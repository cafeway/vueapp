<template>
<v-app>
</v-app>
</template>
<script>
import { mapGetters } from 'vuex'
const PubNub = require('pubnub')
export default {
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  mounted () {
    const pubnub = new PubNub({
      publishKey: 'pub-c-f512a648-0b68-418a-a761-487b845677ff',
      subscribeKey: 'sub-c-21100d28-6bb9-11eb-889a-ee4206f2a398',
      uuid: this.user.data.email
    })
    // pubnub.addListener({
    //   message: function (m) {
    //   },
    //   presence: function (p) {
    //   },
    //   signal: function (s) {
    //   },
    //   objects: (objectEvent) => {
    //   },
    //   messageAction: function (ma) {
    //   },
    //   file: function (event) {
    //   },
    //   status: function (s) {
    //   }
    // })
    // var publishPayload = {
    //   channel: 'hello_world',
    //   message: {
    //     title: 'greeting',
    //     description: 'This is my first message!'
    //   }
    // }

    // pubnub.publish(publishPayload, function (status, response) {
    //   console.log(status, response)
    // })

    // pubnub.subscribe({
    //   channels: ['hello_world']
    // })
    pubnub.addListener({
      status: function (statusEvent) {
        if (statusEvent.category === 'PNConnectedCategory') {
          publishSampleMessage()
        }
      },
      message: function (messageEvent) {
        console.log(messageEvent.message.title)
        console.log(messageEvent.message.description)
      },
      presence: function (presenceEvent) {
        // handle presence
      }
    })
    async function publishSampleMessage () {
      console.log('well receive this')
      const result = await pubnub.publish({
        channel: 'ninja',
        message: {
          title: 'greeting',
          message: {
            title: 'greeting',
            description: 'hey you'
          }
        }
      })
      console.log(result)
    }
    pubnub.subscribe({
      channels: ['ninja']
    })
  }
}
</script>
