import React from 'react';
import './styles/sort.css';

const Sort = () => {
    return (
        <div className={"Sort"}>
            <p>По цене</p>
            <img src="./images/up.svg" alt=""/>
            <p>По цене</p>
            <img src="./images/down.svg" alt=""/>
            <p>Сначала новинки</p>
        </div>
    );
};

export default Sort;