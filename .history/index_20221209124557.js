const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lrirltv.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {
        await client.connect();
        const productCollection = client.db('emaJohn').collection("product");


        app.get('/product', async (req, res) => {
            const query = {};
            const cursor = productCollection.find(query)
        })




    }
    finally { }

    run().catch(console.dir);

    app.get('/', (req, res) => {
        res.send('ema-jhon running to root')
    })

    app.listen(port, () => {
        console.log(`john is running on port ${port}`)
    })