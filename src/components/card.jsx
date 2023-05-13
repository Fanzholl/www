import React from 'react';
import './styles/card.css';

const Card = (properties) => {

    function Favorite(event) {
        if (event.target.classList.contains("HeartFavorite")) {
            event.target.classList.remove("HeartFavorite")
        } else {
            event.target.classList.add("HeartFavorite");
        }
    }

    return (
        <div className={"Card"}>
            {(properties.sale > 0) ? <p className={"Saler"}>{properties.sale}% скидка</p> : ''}
            {(properties.isNew) ? <p className={"New"}>Новинка</p> : ''}
            <i className={"Heart"} onClick={Favorite}></i>
            <img src={"./images/" + properties.img + ".png"} alt="" className={"Item"}/>
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