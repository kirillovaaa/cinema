import React from "react";
import supernatural from "../images/supernatural.jpg";
import bigmouth from "../images/bigmouth.jpg";
import solar from "../images/solar.jpg";
import disenchantment from "../images/disenchantment.jpg";

import "./Films.css";

const Films = () => (
  <div className="films">
    <div class="films-header">
      <h2 className="films-title">Самый популярный фильм на неделе</h2>
      <button className="films-search-button" type="button">
        Посмотреть остальные фильмы
      </button>
    </div>

    <div className="films-background">
      <img
        className="films-supernatural"
        src={supernatural}
        alt="Сверхъестественное"
      ></img>
      <button className="films-watch" type="button">
        Посмотреть
      </button>
    </div>

    <div class="films-header2">
      <h2 className="films-title2">Вы хотели посмотреть</h2>
      <button className="films-search-button2" type="button">
        Полный список
      </button>
    </div>

    <div className="films-cards">
      <div className="films-cards-wrapper">
        <img className="films-bigmouth" src={bigmouth} alt="Большой рот"></img>
        <button className="films-watch2" type="button">
          Посмотреть
        </button>
      </div>
      <div className="films-cards-wrapper">
        <img
          className="films-solar"
          src={solar}
          alt="Солнечные противоположности"
        ></img>
        <button className="films-watch2" type="button">
          Посмотреть
        </button>
      </div>
      <div className="films-cards-wrapper">
        <img
          className="films-disenchantment"
          src={disenchantment}
          alt="Разочарование"
        ></img>
        <button className="films-watch2" type="button">
          Посмотреть
        </button>
      </div>
    </div>
  </div>
);

export default Films;
