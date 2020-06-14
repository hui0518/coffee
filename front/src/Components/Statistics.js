import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";

function Statistics({ coffees }) {
    const oneDay = 86400000;

    const filteredCoffees = (days) =>
        coffees.filter((x) => {
            var delta = new Date() - new Date(x.date);
            return 0 <= delta && delta <= oneDay * days;
        });

    const reduceCoffees = (li, t) => li.reduce((acc, x) => acc + x[t], 0);

    const statistics = [1, 7, 30]
        .map((x) => filteredCoffees(x))
        .map((x) =>
            ["caffein", "sugar", "price"].map((y) => {
                const a = Math.round(reduceCoffees(x, y) / x.length);
                if (isNaN(a)) {
                    return 0;
                } else {
                    return a;
                }
            })
        );
    console.log(statistics);

    return (
        <Container>
            <Row xl={3} lg={3} md={2} sm={1} xs={1}>
                <Col>
                    <Card
                        style={{
                            width: "18rem",
                            margin: "auto",
                            marginTop: "1rem",
                        }}
                    >
                        <Card.Body>
                            <Card.Title>Recent 1 day</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{statistics[0][0]} mg</ListGroupItem>
                            <ListGroupItem>
                                {statistics[0][1]} kcal
                            </ListGroupItem>
                            <ListGroupItem>
                                {statistics[0][2]} won
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: "18rem",
                            margin: "auto",
                            marginTop: "1rem",
                        }}
                    >
                        <Card.Body>
                            <Card.Title>Recent 1 week</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{statistics[1][0]} mg</ListGroupItem>
                            <ListGroupItem>
                                {statistics[1][1]} kcal
                            </ListGroupItem>
                            <ListGroupItem>
                                {statistics[1][2]} won
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            width: "18rem",
                            margin: "auto",
                            marginTop: "1rem",
                        }}
                    >
                        <Card.Body>
                            <Card.Title>Recent 1 month</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{statistics[2][0]} mg</ListGroupItem>
                            <ListGroupItem>
                                {statistics[2][1]} kcal
                            </ListGroupItem>
                            <ListGroupItem>
                                {statistics[2][2]} won
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Statistics;
