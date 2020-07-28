import React from "react";

import logo from "../../assets/logo.svg";

import './styles.css';

import heroesImg from "../../assets/heroes.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="logo" />

        <form>
          <h1>Faça seu login</h1>
          <input 
            placeholder="Sua ID"
          />

          <button className="button" type="submit">Entrar</button>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
