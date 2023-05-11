import "./styles/nav.css"

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href={"./#"} className={"navA"}>Главная</a></li>
                <li><a href={"./#"} className={"navA"}> Каталог</a></li>
                <li><a href={"./#"} className={"navA"}> Новые продукты</a></li>
                <li><a href={"./#"} className={"navA"}> О нас</a></li>
                <li><a href={"./#"} className={"navA"} id={"lastA"}> Контакты</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
  