import React from 'react';
import "./styles/menuGrid.css";
import Card from "./card";

const MenuGrid = (properties) => {
    return (
        <div className={"MenuGrid"}>
            {properties.cardData.map( el =>
                <Card key={el.name} price={el.price} name={el.name} description={el.description} isNew={el.isNew} sale={el.sale} img={el.img}/>) }
        </div>
    );
};

export default MenuGrid;