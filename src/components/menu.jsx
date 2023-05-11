import React from 'react';
import MenuName from "./menuName";
import "./styles/menu.css";
import MenuGrid from "./menuGrid";
import Sort from "./sort";

const Menu = () => {
    return (
        <div className={"Menu"}>
            <MenuName />
            <Sort />
            <MenuGrid />
        </div>
    );
};

export default Menu;