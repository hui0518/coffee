const User = require('./db').User;
const session = require('express-session');
const crypto = require('crypto');

const salt = 'ski$*#%^%&$';

function addUser(userid, password, res) {
	const hash = crypto.createHash('sha512').update(salt+password).digest('base64');
	const user = new User({
		id: userid,
		password: hash,
		coffees: [],
		favorites: []
	});
	user.save((err, user) => {
		if (err) {
            console.error(err);
            res.status(400);
        }else{
			 res.status(200), res.send(user);
		}
	})
}

function login(userid, password,req, res) {
	const hash = crypto.createHash('sha512').update(salt+password).digest('base64');
	sess = req.session;
	if (sess.logined) {
		res.send(true)
	} else {
		User.findOne({id:userid}, (err, user)=>{
			if (err) {
				sess.logined = false;
				res.send({logined: false, error: true});
			}else if (user.password===hash){
				sess.logined = true;
				sess.userid = userid;
				res.send({logined: true, error: false});
			} else {
				sess.logined = false;
				res.send({logined: false, error: true});
			}
		})
	}
}

function logout(req, res) {
	req.session.destroy(function(err){
    	if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
}

module.exports = {addUser, login, logout};
