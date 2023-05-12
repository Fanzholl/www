import React, {useState} from 'react';
import MenuName from "./menuName";
import "./styles/menu.css";
import MenuGrid from "./menuGrid";
import Sort from "./sort";

const Menu = () => {
    const cardsData = [
        {"name": "Помидор", "price":120, "description":"свежие томаты, сезонные овощи"},
        {"name": "Мясо", "price":660, "description":"свежее мясо, говядина", "sale":25},
        {"name": "Картофель", "price":70, "description":"молодой картофель, белый", "isNew":true},
        {"name": "Капуста", "price":80, "description":"цветная капуста"},
        {"name": "Огурцы", "price":60, "description":"свежие огурцы, тепличные", "sale":15},
        {"name": "Бананы", "price":120, "description":"бананы крупные", "sale":15},
        {"name": "Лук", "price":50, "description":"лук репчатый, белый", "isNew":true},
        {"name": "Лимоны", "price":220, "description":"лимоны свежий урожай"},
        {"name": "Брокколи", "price":80, "description":"капуста брокколи, свежая", "sale":25},
        {"name": "Перец", "price":120, "description":"перец болгарский, сладкий"},
        {"name": "Клубника", "price":320, "description":"ягоды свежие, клубника",  "isNew":true},
        {"name": "Виноград", "price":180, "description":"виноград без косточки", "sale":20},
        {"name": "Вишня", "price":220, "description":"ягоды свежие, вишня", "isNew":true},
        {"name": "Мука", "price":90, "description":"мука, высший сорт", "sale":20},
        {"name": "Хлеб", "price":50, "description":"хлеб, высший сорт, порционный"}
    ]

    const [cardData, setCardData] = useState(cardsData);

    return (
        <div className={"Menu"}>
            <MenuName />
            <Sort setCardData={setCardData} cardData={cardData}/>
            <MenuGrid cardData={cardData}/>
        </div>
    );
};

export default Menu;