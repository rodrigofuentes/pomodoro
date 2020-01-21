const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// TODO: implement express static
app.use(express.static(path.resolve(__dirname, '../src/index.html')));

// // send on root
// app.get('/', (req, res) => {
//   res.sendFile(index.html);
// });

// listen on 3000
app.listen(3000, () => console.log('on 3000'));
