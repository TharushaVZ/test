const express = require('express');
const app = express();

let name = "Tharusha";
let batch = "24.1";

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const port = 3001;

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
    console.log(`Name: ${name}`);
    console.log(`Batch: ${batch}`);
});