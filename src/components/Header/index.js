import React from 'react';
import { Link } from 'react-router-dom'

export default function Header(){
    const Logo = "https://minhaconta.orama.com.br/static/img/logos/orama.svg";
    return(
        <header className="bg-logo p-8 flex justify-center shadow-2xl">
            <Link to="/">
                <img src={Logo} alt="Orama" />
            </Link>
        </header>
    )
}