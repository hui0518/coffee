import React from "react";
import FavoriteCard from "./FavoriteCard";

import FavoriteForm from "./FavoriteForm";

import { Container, Row, Col } from "react-bootstrap";

function FavoriteCards({ favorites, deleteFavorite, addFavorite }) {
    const a = favorites.map(
        ({ _id, coffeeName, cafeName, caffein, sugar, price }) => (
            <Col key={_id}>
                <FavoriteCard
                    coffeeName={coffeeName}
                    cafeName={cafeName}
                    caffein={caffein}
                    sugar={sugar}
                    price={price}
                    handle={(e) => {
                        e.preventDefault();
                        deleteFavorite(_id);
                    }}
                />
            </Col>
        )
    );

    return (
        <Container fluid={true}>
            <Row xl={4} lg={3} md={2} sm={1} xs={1}>
                <Col>
                    <FavoriteForm addFavorite={addFavorite} />
                </Col>
                {favorites.length !== 0 ? a : <h1 variant="danger">No data</h1>}
            </Row>
        </Container>
    );
}

export default FavoriteCards;
