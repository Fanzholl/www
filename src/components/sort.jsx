import React from 'react';
import './styles/sort.css';

const Sort = (properties) => {
    function DownSale() {

        properties.setCardData( prev => [...prev].sort( (a, b) => {
            return a.price - b.price;
        }));

    }

    function UpSale() {

        properties.setCardData( prev => [...prev].sort( (a, b) => {
            return b.price - a.price;
        }));

    }

    function UpNew() {

        properties.setCardData( prev => [...prev].sort( (a, b) => {
            return (b?.isNew) ? 1 : -1;
        }));

    }

    return (
        <div className={"Sort"}>
            <p onClick={UpSale}>По цене</p>
            <img src={"./images/up.svg"} alt=""/>
            <p onClick={DownSale}>По цене</p>
            <img src={"./images/down.svg"} alt=""/>
            <p onClick={UpNew}>Сначала новинки</p>
        </div>
    );
};

export default Sort;