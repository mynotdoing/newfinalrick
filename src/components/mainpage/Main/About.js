import React from "react";
import { NavLink } from "react-router-dom";
import arrow from "./../../../img/arrow.png";

export default function About() {
  return (
    <div className="about">
      <div className="bnt">
        <NavLink  to={"/"}>
          <img className="arrow" src={arrow} alt="arrow" />
          TO MAIN PAGE
        </NavLink>
      </div>
      <h4>
        Використовуючи ReaсtJS (бажано але можна Angular чи будь-який інший
        фреймворк) реалізувати завдання з наступними вимогами:{" "}
      </h4>
      <ol>
        <li>Вигляд сторінок має відповідати макету за посиланням нижче:</li>

        <a
          href="https://www.figma.com/file/wsndIMMisT3mRUm59NtW6U/Rick-and-Morty-(web-responsive)-(Community)?node-id=0%3A1&amp;t=zXvvbBwrY5qV6cIh-0"
          target="_blank"
          rel="noreferrer"
        >
          https://www.figma.com/file/wsndIMMisT3mRUm59NtW6U/Rick-and-Morty-(web-responsive)-(Community)?node-id=0%3A1&amp;t=zXvvbBwrY5qV6cIh-0
        </a>
        <p>HTML/SCSS бажано писати власні без використання UI бібліотек.</p>
        <li>Дизайн має бути адаптивний (як на макеті).</li>
        <li>
          При старті аплікації у користувача має йти запит до API і
          відмальовуватись список персонажів з мультфільму. Список персонажів
          має бути відсортований по імені.
        </li>
        <li>
          Клікнувши на окремого персонажа має йти запит по окремому персонажу і
          бути перенаправлення на інший роут з більш детальною інформацією про
          нього.
        </li>
        <li>
          Кнопка “go back” має перенаправляти на попередній роут зі списком
          персонажів.
        </li>
        <li>
          Реалізувати пошук серед персонажів по їх імені. (при введені імені
          персонажу список має фільтруватись і показувати лише співпадіння з
          пошуком, список персонажів також має бути відсортований по імені).
        </li>
      </ol>
    </div>
  );
}
