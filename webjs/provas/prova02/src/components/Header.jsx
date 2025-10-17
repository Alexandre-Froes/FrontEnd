import '../assets/styles/styles.css';

import {Link} from 'react-router-dom';

function Header() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/" className="menu">Home</Link></li>
                        <li><Link to="/login" className="menu">Login</Link></li>
                        <li><Link to="/calculadora" className="menu">Calculadora</Link></li>
                        <li><Link to="/conversor" className="menu">Conversor</Link></li>
                        <li><Link to="/faleConosco" className="menu">Fale Conosco</Link></li>
                    </ul>
                </nav>
            </header>
        );
}

export default Header;