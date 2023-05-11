import "./styles/header.css"
import Nav from "./nav";

function Header() {
    return (
        <header>
            <h1>Еда в дом</h1>
            <Nav/>
            <img src={"./images/profile.svg"} alt=""/>
        </header>
    );
}

export default Header;
  