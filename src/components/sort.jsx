import React from 'react';
import './styles/sort.css';

const Sort = (properties) => {
    function DownSale() {
        properties.setCardData(properties.cardData.sort( (a, b) => {
            return a.price - b.price
        }));

        console.log(properties.cardData)
    }
    return (
        <div className={"Sort"}>
            <p id={"DownSale"} onClick={DownSale}>По цене</p>
            <img src={"./images/up.svg"} alt=""/>
            <p>По цене</p>
            <img src={"./images/down.svg"} alt=""/>
            <p>Сначала новинки</p>
        </div>
    );
};

export default Sort;