import React from "react";
import "./Hero.css";

const Hero = () => (
  <div className="hero">
    <h1 className="hero-heading">Фильмы, сериалы,</h1>
    <h2 className="hero-heading2">мультфильмы в одном месте!</h2>
    <p className="hero-title">
      Всегда хотели узнать где можно дешевле посмотреть то или иное произведение
      исскуства? Просто обсудить какую-либо кинофраншизу? А может просто
      посмотреть последние новости в сфере кино? Тогда, данный сайт был сделан
      для вас!
    </p>
    <button className="hero-catalog" type="button">
      Посмотреть каталог фильмов
    </button>
  </div>
);

export default Hero;
