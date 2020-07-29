import React from "react";
import { Link } from 'react-router-dom'

import logo from "../../assets/logo.png";
import Button from "../Button";
//import ButtonLink from './components/ButtonLink';

import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/" >
        <img className="Logo" src={logo} alt="Lfvflix logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
