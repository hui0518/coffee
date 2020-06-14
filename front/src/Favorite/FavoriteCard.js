import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
function FavoriteCard({ coffeeName, cafeName, caffein, sugar, price, handle }) {
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
                <Card.Title>{coffeeName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    {cafeName}
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

export default FavoriteCard;
