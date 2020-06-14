import React from "react";

import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

function CoffeeCard({
    coffeeName,
    cafeName,
    caffein,
    sugar,
    price,
    date,
    handle,
}) {
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
                <Card.Title>{coffeeName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {cafeName}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    {date}
                </Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{`Caffein(mg): ${caffein}`}</ListGroupItem>
                <ListGroupItem>{`Sugar(kcal): ${sugar}`}</ListGroupItem>
                <ListGroupItem>{`price(won): ${price}`}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button variant="primary" onClick={handle}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CoffeeCard;
