import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from the website!!");
})

app.listen(8000, () => {
    console.log("started listening for requests at 8000");
})

