const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.testFunction = functions.https.onCall(() => {
  console.info('Test Function triggered')
  return { message: "Yeaaahh it's working!" }
})
