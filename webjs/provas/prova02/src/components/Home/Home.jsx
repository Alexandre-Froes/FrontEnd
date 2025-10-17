import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/styles.css';

import TituloSubtitulo from "../TituloSubtitulo";

function Home() {
        return (
            <>
                    <TituloSubtitulo titulo="Seja Bem-Vindo!" subtitulo="Quais dos serviços deseja usar?"></TituloSubtitulo>

                <section className="container">
                    <div>
                        <Link to="/calculadora"><img src="images/calculadora.jpg" alt="" /></Link>
                        <h2>Calculadora</h2>
                    </div>
                    <div>
                        <Link to="/conversor"><img src="images/ampulheta.jpg" alt="" /></Link>
                        <h2>Conversor</h2>
                    </div>
                    <div>
                        <Link to="/login"><img src="images/login.png" alt="" /></Link>
                        <h2>Login</h2>
                    </div>
                </section>
            </>
        );
}

export default Home;