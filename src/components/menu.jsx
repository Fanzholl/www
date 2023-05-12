import React, {useState} from 'react';
import MenuName from "./menuName";
import "./styles/menu.css";
import MenuGrid from "./menuGrid";
import Sort from "./sort";

const Menu = () => {
    const cardsData = [
        {"name": "Помидор", "price":120, "description":"свежие томаты, сезонные овощи", "img": 1},
        {"name": "Мясо", "price":660, "description":"свежее мясо, говядина", "sale":25, "img": 2},
        {"name": "Картофель", "price":70, "description":"молодой картофель, белый", "isNew":true, "img": 3},
        {"name": "Капуста", "price":80, "description":"цветная капуста", "img": 4},
        {"name": "Огурцы", "price":60, "description":"свежие огурцы, тепличные", "sale":15, "img": 5},
        {"name": "Бананы", "price":120, "description":"бананы крупные", "sale":15, "img": 6},
        {"name": "Лук", "price":50, "description":"лук репчатый, белый", "isNew":true, "img": 7},
        {"name": "Лимоны", "price":220, "description":"лимоны свежий урожай", "img": 8},
        {"name": "Брокколи", "price":80, "description":"капуста брокколи, свежая", "sale":25, "img": 9},
        {"name": "Перец", "price":120, "description":"перец болгарский, сладкий", "img": 10},
        {"name": "Клубника", "price":320, "description":"ягоды свежие, клубника",  "isNew":true, "img": 11},
        {"name": "Виноград", "price":180, "description":"виноград без косточки", "sale":20, "img": 12},
        {"name": "Вишня", "price":220, "description":"ягоды свежие, вишня", "isNew":true, "img": 13},
        {"name": "Мука", "price":90, "description":"мука, высший сорт", "sale":20, "img": 14},
        {"name": "Хлеб", "price":50, "description":"хлеб, высший сорт, порционный", "img": 15}
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