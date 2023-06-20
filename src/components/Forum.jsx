import React from "react";
import "./Forum.css";
import bubble from "../images/bubble.jpg";

const Forum = () => (
  <div className="forum">
    <div className="forum-form1">
      <div className="forum-header">
        <div className="forum-title">Форум</div>
        <button className="forum-button" type="button">
          Все треды
        </button>
      </div>
    </div>

    <div className="forum-news1">
      <div className="forum-bubble-studio-div1">
        <img
          className="forum-bubble-studio-image"
          src={bubble}
          alt="Студия Бабл"
        />
        <div className="forum-bubble-studio-container">
          <div className="forum-bubble-studio-title">
            КиноВселенная “Майора Грома”
          </div>
          <div className="forum-bubble-studio-subtitle">
            В данном треде, Вы сможете узнать намного больше про киновселенную
            от Bubble про великого майора полиции - Игоря Грома
          </div>
          <div className="forum-bubble-studio-button">Подробнее</div>
        </div>
      </div>
      <div className="forum-bubble-studio-div2">
        <div className="forum-bubble-studio-title">
          Каким будет новый фильм от марвел?
        </div>
        <div className="forum-bubble-studio-subtitle">
          Скоро на экраны выходит новый фильм от Sony Marvel, хотелось бы
          порассуждать, а каким он будет? Если у вас есть какие-либо заметки,
          милости прошу к нашему шалашу...
        </div>
        <div className="forum-bubble-studio-button">Подробнее</div>
      </div>
    </div>

    <div className="forum-news1">
      <div className="forum-bubble-studio-div2">
        <div className="forum-bubble-studio-title">
          Каким будет новый фильм от марвел?
        </div>
        <div className="forum-bubble-studio-subtitle">
          Скоро на экраны выходит новый фильм от Sony Marvel, хотелось бы
          порассуждать, а каким он будет? Если у вас есть какие-либо заметки,
          милости прошу к нашему шалашу...
        </div>
        <div className="forum-bubble-studio-button">Подробнее</div>
      </div>
      <div className="forum-bubble-studio-div1">
        <img
          className="forum-bubble-studio-image"
          src={bubble}
          alt="Студия Бабл"
        />
        <div className="forum-bubble-studio-container">
          <div className="forum-bubble-studio-title">
            КиноВселенная “Майора Грома”
          </div>
          <div className="forum-bubble-studio-subtitle">
            В данном треде, Вы сможете узнать намного больше про киновселенную
            от Bubble про великого майора полиции - Игоря Грома
          </div>
          <div className="forum-bubble-studio-button">Подробнее</div>
        </div>
      </div>
    </div>
  </div>
);

export default Forum;
