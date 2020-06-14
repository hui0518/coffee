const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require('cors');
const session = require('express-session')
const mongoose = require('mongoose');

const coffees = require('./db/coffees');
const users = require('./db/users')
const favorites = require('./db/favorites');


const app = express();

app.use(cors({
	origin: ['http://hanski.net/build'],
    credentials: true
}));


app.use(session({
    secret: 'afsaddsfsadfgv',
    resave: false,
    saveUninitialized: true,
}));
app.use(bodyParser.json());

app.get('/', (req,res) =>{
	res.send(req)
	res.send(req.session);
})

app.post('/login', (req, res) => {
	const userid = req.body.userid;
	const password = req.body.password;
	users.login(userid, password, req ,res);
})

app.get('/logout', (req, res) => {
	users.logout(req,res);
})

app.post("/addUser", (req, res) => {
	const userid = req.body.userid;
	const password = req.body.password;
	users.addUser(userid, password, res);
})

app.get("/showCoffees", (req, res) => {
    const userid = req.session.userid;
    coffees.showCoffees(userid, res);
});

app.post("/deleteCoffee", (req, res) => {
	const userid = req.session.userid;
    const coffeeId = req.body.coffeeId;
	coffees.deleteCoffee(userid, coffeeId, res);
});

app.post("/addCoffee", (req, res) => {
	const userid = req.session.userid;
	const coffeeObject = req.body.coffeeObject;
	coffees.addCoffee(userid, coffeeObject, res);
})

app.get("/showFavorites", (req, res) => {
    const userid = req.session.userid;
    favorites.showFavorites(userid, res);
});

app.post("/deleteFavorite", (req, res) => {
	const userid = req.session.userid;
    const coffeeId = req.body.favoriteId;
	favorites.deleteFavorite(userid, coffeeId, res);
});

app.post("/addFavorite", (req, res) => {
	const userid = req.session.userid;
	const favoriteObject = req.body.favoriteObject;
	favorites.addFavorite(userid, favoriteObject, res);
})

app.listen(3002, () => {
    console.log("Server is running");
});
