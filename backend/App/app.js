var express = require('express');
var app = express();

var session = require('express-session');
app.use(session({secret: 'ssshhhhh'}));
var sess;

const crypto = require('crypto');
const secret = 'abcdefg';

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var cors = require('cors');
app.use (cors());

var provence = require('../Routes/Provence');
app.use('/provencenames', provence );

var produk = require('../Routes/product');
app.use('/product', produk );

var produkDetail = require('../Routes/productdetail');
app.use('/productdetail',produkDetail)

var home = require('../Routes/home')
app.use('/home', home)

var login = require('../Routes/userdata');
app.use('/login', login);

var logout = require('../routes/logout')
app.use('/logout', logout)

var historyinvoice = require('../Routes/historyinvoice');
app.use('/historyinvoice', historyinvoice);


var addtocart = require('../Routes/addtocart');
app.use('/cart', addtocart);

var checkout = require('../Routes/Checkout');
app.use('/checkout', checkout);

app.listen(3030,(console.log('run')))