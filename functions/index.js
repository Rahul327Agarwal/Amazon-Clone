const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51KLZ5OSE3Efkuyefe587Z5QwkLVnVIFDXUxCvjJoB8CTowPmrNWN6MrSh4acb324bbbr6RpGGDVzor5iR0ULJzEU00CkRW5bIA');


//api 

// app config
const app = express();

// middleware
app.use(cors({origin:true}));
app.use(express.json());


// api routes
app.get('/',(req, res) => res.status(200).send('hello world'));
app.post("payments/create", async (req, res) => {
    const total = req.query.total;
    console.log(total);
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });
    // ok created
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

// listen command
exports.api = functions.https.onRequest(app)

//(http://localhost:5001/clone-c6401/us-central1/api)