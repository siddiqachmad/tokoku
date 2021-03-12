const express = require('express');
const cors = require('cors');
const port = process.env.POST || 3000;

//membuat routing
const indexRouter = require('./routes');
const handleError = require('./middleware/handleerror');

const app = express();

//agar project server menerima json

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

//wajib di bawah cors

app.use(indexRouter);
app.use(handleError);

app.listen(port, () => {
    console.log('app listen port :', port);
})