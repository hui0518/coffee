var User = require('./db').User;

function showFavorites(id, res) {
    User.findOne({ id: id }, (err, user) => {
        if (err) {
            res.status(400);
			res.send([])
        }else{
			if (user) {
				res.status(200);
        		res.send(user.favorites);
			} else {
				res.send([]);
			}	
		}
    });
}

function addFavorite(id, favoriteObject, res) {
	User.findOne({id:id}, (err, user) => {
		var favors = user.favorites;
		favors.push(favoriteObject)
		User.where({id: id}).updateOne({favorites: favors}, function(err){if (err) return console.error(err)})
		res.send(favors)
	})
}

function deleteFavorite(id, favoriteId, res) {
	User.findOne({id:id}, (err, user) => {
		var c = user.favorites;
		c = c.filter(x => {return String(x._id)!==favoriteId});
		User.where({id: id}).updateOne({favorites: c}, function(err){if (err) return console.error(err)})
		res.send(c)
	})
}

module.exports = {showFavorites, addFavorite, deleteFavorite};
