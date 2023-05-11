import './App.css';
import Header from "./components/header";
import Menu from "./components/menu";
import './components/styles/media.css'
import Subscribe from "./components/subscribe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Menu />
            <Subscribe />
        </div>
    );
}

export default App;
