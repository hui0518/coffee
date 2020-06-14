var User = require('./db').User;

function showCoffees(userid, res) {
    User.findOne({ id: userid }, (err, user) => {
        if (err) {
            res.status(400);
            res.send([])
        }else{
			if (user) {
				res.send(user.coffees);
			}else{
				res.send([])
			}
		}
    });
}

function addCoffee(userid, coffeeObject, res) {
	User.findOne({id:userid}, (err, user) => {
		var newCoffees = user.coffees;
		newCoffees.push(coffeeObject);
		User.where({id: userid}).updateOne({coffees: newCoffees}, function(err){if (err) return console.error(err)});
		res.send(newCoffees);
	})
}

function deleteCoffee(userid, coffeeId, res) {
	User.findOne({id:userid}, (err, user) => {
		var newCoffees = user.coffees.filter(x => {return String(x._id)!==coffeeId});
		User.where({id: userid}).updateOne({coffees: newCoffees}, function(err){if (err) return console.error(err)})
		res.send(newCoffees)
	})
}

module.exports = {showCoffees, addCoffee, deleteCoffee};