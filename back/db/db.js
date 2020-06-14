var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/coffees", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

var db = mongoose.connection;

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
	password: {
		type: String,
		required: true,
		trim:true
	},
    coffees: [
        {
            coffeeName: String,
            cafeName: String,
			caffein: Number,
            sugar: Number,
            price: Number,
			date: String
        },
    ],
	favorites: [
		{
			coffeeName: String,
            cafeName: String,
			caffein: Number,
            sugar: Number,
            price: Number,
		}
	]
});

db.on("error", console.error);
db.once("open", function () {
    console.log("Connected to mongodb server");
});

var User = mongoose.model("users", userSchema);

module.exports = { User };
