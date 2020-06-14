import React from "react";
import FavoriteCards from "./../Favorite/FavoriteCards";

function Favorites({ favorites, deleteFavorite, addFavorite }) {
    return (
        <FavoriteCards
            favorites={favorites}
            deleteFavorite={deleteFavorite}
            addFavorite={addFavorite}
        />
    );
}

export default Favorites;
