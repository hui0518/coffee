import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";

import Header from "./Components/Header";
import Login from "./Components/Login";
import Singup from "./Components/Signup";
import Coffees from "./Components/Coffees";
import Favorites from "./Components/Favorites";
import Statistics from "./Components/Statistics";

import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.withCredentials = true;

const url = "13.125.161.224:57043";

function App() {
    const [coffees, setCoffees] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [log, setLog] = useState(false);

    const addUser = (userid, password) => {
        axios({
            method: "post",
            url: `http://${url}/addUser`,
            data: {
                userid: userid,
                password: password,
            },
            withCredentials: true,
        });
    };

    const check = () => {
        axios({
            method: "get",
            url: `http://${url}`,
        }).then((res) => {
            if (res.data.logined) {
                setLog(res.data.logined);
                showCoffees();
                showFavorites();
            }
        });
    };

    const login = (userid, password) => {
        axios({
            method: "post",
            url: `http://${url}/login`,
            data: {
                userid: userid,
                password: password,
            },
        }).then((res) => {
            setLog(res.data.logined);
        });
    };
    const logout = () => {
        axios({
            method: "get",
            url: `http://${url}/logout`,
        }).then(() => {
            setLog(false);
        });
    };

    const showCoffees = () => {
        axios({
            method: "get",
            url: `http://${url}/showCoffees`,
        }).then((res) => {
            setCoffees(res.data);
        });
    };
    const addCoffee = ({
        coffeeName,
        cafeName,
        caffein,
        sugar,
        price,
        date,
    }) => {
        axios({
            method: "post",
            url: `http://${url}/addCoffee`,
            data: {
                coffeeObject: {
                    coffeeName,
                    cafeName,
                    caffein,
                    sugar,
                    price,
                    date,
                },
            },
        }).then(() => {
            showCoffees();
        });
    };

    const deleteCoffee = (_id) => {
        axios({
            method: "post",
            url: `http://${url}/deleteCoffee`,
            data: {
                coffeeId: _id,
            },
        }).then(() => {
            showCoffees();
        });
    };

    const showFavorites = () => {
        axios({
            method: "get",
            url: `http://${url}/showFavorites`,
        }).then((res) => setFavorites(res.data));
    };

    const addFavorite = ({ coffeeName, cafeName, caffein, sugar, price }) => {
        axios({
            method: "post",
            url: `http://${url}/addFavorite`,
            data: {
                favoriteObject: {
                    coffeeName,
                    cafeName,
                    caffein,
                    sugar,
                    price,
                },
            },
        }).then(() => {
            showFavorites();
        });
    };
    const deleteFavorite = (_id) => {
        axios({
            method: "post",
            url: `http://${url}/deleteFavorite`,
            data: {
                favoriteId: _id,
            },
        }).then(() => {
            showFavorites();
        });
    };

    useEffect(() => {
        check();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (log) {
            showFavorites();
            showCoffees();
        }
    }, [log]);

    return (
        <div>
            <Header logined={log} logout={logout} />

            <Switch>
                <Route exact path="/signup">
                    <Singup addUser={addUser} />
                </Route>

                <Route exact path="/favorites">
                    <Favorites
                        favorites={favorites}
                        deleteFavorite={deleteFavorite}
                        addFavorite={addFavorite}
                    />
                </Route>

                <Route exact path="/statistics">
                    <Statistics coffees={coffees} />
                </Route>

                <Route exact path="/login">
                    <Login login={login} />
                </Route>

                <Route path="/">
                    {log ? (
                        <Coffees
                            coffees={coffees}
                            deleteCoffee={deleteCoffee}
                            addCoffee={addCoffee}
                            favorites={favorites}
                        />
                    ) : (
                        <Login login={login} />
                    )}
                </Route>
            </Switch>
        </div>
    );
}

export default App;
