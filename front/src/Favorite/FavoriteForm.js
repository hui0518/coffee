import React, { useState } from "react";
import { Form, Col, Button, Card } from "react-bootstrap";

function FavoriteForm({ addFavorite }) {
    const [state, setState] = useState({
        coffeeName: "",
        cafeName: "",
        caffein: 0,
        sugar: 0,
        price: 0,
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addFavorite(state);
        setState({
            coffeeName: "",
            cafeName: "",
            caffein: 0,
            sugar: 0,
            price: 0,
        });
    };

    return (
        <Card
            style={{
                width: "18rem",
                height: "21rem",
                margin: "auto",
                marginTop: "1rem",
            }}
        >
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>coffee name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                value={state.coffeeName}
                                type="text"
                                name="coffeeName"
                                placeholder="coffee"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>cafe name</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="cafeName"
                                type="text"
                                placeholder="cafe"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Caffein</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="caffein"
                                type="number"
                                placeholder={0}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Sugar</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="sugar"
                                type="number"
                                placeholder={0}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="price"
                                type="number"
                                placeholder={0}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default FavoriteForm;
