import React from 'react';
import './styles/subscribe.css';

const Subscribe = () => {
    return (
        <div className={"Subscribe"}>
            <p className={"Join"}>Присоединяйтесь к нам и получите скидку до 50%</p>
            <p className={"JoinDescription"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            <form action="#" method={"POST"}>
                <input type="text" placeholder={"Введите email"}/>
                <button>Войти</button>
            </form>
        </div>
    );
};

export default Subscribe;