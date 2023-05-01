import React from "react";
import supernatural from "../images/supernatural.jpg";
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
  </div>
);

export default Films;
