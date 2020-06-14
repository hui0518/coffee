import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

function Singup({ addUser }) {
    const [state, setState] = useState({
        userid: "",
        password: "",
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(state.userid, state.password);
        setState({
            userid: "",
            password: "",
        });
    };
    return (
        <Card style={{ width: "18rem", margin: "auto", marginTop: "2rem" }}>
            <Card.Header>Sign up</Card.Header>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>id</Form.Label>
                        <Form.Control
                            name="userid"
                            label="id"
                            variant="outlined"
                            type="text"
                            value={state.userid}
                            required
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>password</Form.Label>
                        <Form.Control
                            name="password"
                            label="password"
                            variant="outlined"
                            type="password"
                            required
                            value={state.password}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign up
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Singup;
