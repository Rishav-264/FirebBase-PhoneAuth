const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen('3000',(req,res)=>{
    console.log("Server Running");
})

exports.app = functions.https.onRequest(app);
