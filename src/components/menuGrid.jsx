import React from 'react';
import "./styles/menuGrid.css";
import Card from "./card";

const MenuGrid = (properties) => {

    let counter = 1;
    return (
        <div className={"MenuGrid"}>
            {properties.cardData.map( el =>
                <Card key={el.name} price={el.price} name={el.name} description={el.description} counter={counter++} isNew={el.isNew} sale={el.sale}/>) }
        </div>
    );
};

export default MenuGrid;