import React, { useState } from "react";

import { Form, Col, Button, Card } from "react-bootstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function CoffeeForm({ addCoffee, favorites }) {
    const [state, setState] = useState({
        coffeeName: "",
        cafeName: "",
        caffein: 0,
        sugar: 0,
        price: 0,
        date: new Date(),
    });

    const handleDate = (date) => {
        setState({
            ...state,
            date: date,
        });
    };

    const handleFavorite = (e) => {
        e.preventDefault();
        var _id = e.target.value;
        if (_id === "none") {
            setState({
                coffeeName: "",
                cafeName: "",
                caffein: 0,
                sugar: 0,
                price: 0,
                date: new Date(),
            });
        } else {
            var f = favorites.filter((x) => x._id === _id);
            f = f[0];
            var { coffeeName, cafeName, caffein, sugar, price } = f;
            setState({
                ...state,
                coffeeName: coffeeName,
                cafeName: cafeName,
                caffein: caffein,
                sugar: sugar,
                price: price,
            });
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCoffee({
            ...state,
            date: `${state.date.getFullYear()}/${
                state.date.getMonth() + 1
            }/${state.date.getDate()}`,
        });
        setState({
            coffeeName: "",
            cafeName: "",
            caffein: 0,
            sugar: 0,
            price: 0,
            date: new Date(),
        });
    };

    return (
        <Card
            style={{
                width: "18rem",
                height: "24rem",
                margin: "auto",
                marginTop: "1rem",
            }}
        >
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>coffee name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={state.coffeeName}
                                type="text"
                                name="coffeeName"
                                placeholder="coffee"
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>cafe name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={state.cafeName}
                                name="cafeName"
                                type="text"
                                placeholder="cafe"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Caffein</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="caffein"
                                type="number"
                                placeholder={0}
                                value={state.caffein}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Sugar</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="sugar"
                                type="number"
                                placeholder={0}
                                value={state.sugar}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="price"
                                type="number"
                                placeholder={0}
                                value={state.price}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <DatePicker
                            selected={state.date}
                            onChange={handleDate}
                            dateFormat="yyyy/MM/dd"
                        />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Control onChange={handleFavorite} as="select">
                                <option value="none">add manually</option>
                                {favorites.map((x) => (
                                    <option
                                        key={x._id}
                                        value={x._id}
                                    >{`${x.coffeeName}-${x.cafeName}`}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group style={{ width: "10px" }}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default CoffeeForm;
