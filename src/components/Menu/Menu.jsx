import { Link } from "react-router-dom";

function Menu(){
    return(
        <nav className="menu">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/disciplinas">Disciplinas</Link></li>
                <li><Link to="/turmas">Turmas</Link></li>
                <li><Link to="/professores">Professores</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;