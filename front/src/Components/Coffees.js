import React from "react";

import CoffeeCards from "../Coffee/CoffeeCards";

function Coffees({ coffees, addCoffee, deleteCoffee, favorites }) {
    return (
        <CoffeeCards
            coffees={coffees}
            deleteCoffee={deleteCoffee}
            addCoffee={addCoffee}
            favorites={favorites}
        />
    );
}

export default Coffees;
