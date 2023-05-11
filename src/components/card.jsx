import React from 'react';
import './styles/card.css';

const Card = (properties) => {
    return (
        <div className={"Card"}>
            {(properties.sale > 0) ? <p className={"Saler"}>{properties.sale}% скидка</p> : ''}
            {(properties.isNew) ? <p className={"New"}>Новинка</p> : ''}
            <img src={"./images/Heart.svg"} alt="" className={"Heart"}/>
            <img src={"./images/" + properties.counter + ".png"} alt="" className={"Item"}/>
            <div className={"Data"}>
                <p className={"ItemName"}>{properties.name}</p>
                <p className={"Sale"}>{properties.price}</p>
            </div>
            <p className={"ItemText"}>{properties.description}</p>
            <p className={"By"}>Купить</p>
        </div>
    );
};

export default Card;