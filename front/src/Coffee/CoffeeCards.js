import React from "react";
import CoffeeCard from "./CoffeeCard";

import CoffeeForm from "./CoffeeForm";

import { Container, Row, Col } from "react-bootstrap";

function CoffeeCards({ coffees, deleteCoffee, addCoffee, favorites }) {
    let c = coffees;
    const compare = (a, b) => {
        return new Date(b.date) - new Date(a.date);
    };
    c.sort(compare);
    const a = c.map(
        ({ _id, coffeeName, cafeName, caffein, sugar, price, date }) => (
            <Col key={_id}>
                <CoffeeCard
                    coffeeName={coffeeName}
                    cafeName={cafeName}
                    caffein={caffein}
                    sugar={sugar}
                    price={price}
                    date={date}
                    handle={(e) => {
                        e.preventDefault();
                        deleteCoffee(_id);
                    }}
                />
            </Col>
        )
    );

    return (
        <Container fluid={true}>
            <Row xl={4} lg={3} md={2} sm={1} xs={1}>
                <Col>
                    <CoffeeForm addCoffee={addCoffee} favorites={favorites} />
                </Col>
                {coffees.length !== 0 ? a : <Row xl={3}>No data</Row>}{" "}
            </Row>
        </Container>
    );
}

export default CoffeeCards;
