import React from "react";
import logo from "./../../../img/rick.png";
import Input from "./Input";
import { NavLink } from "react-router-dom";
// import Facebook from "./Facebook";
import Pagination from "../../Pagination/Pagination";


// витягуємо передані пропси з App де ми робили запит
export default function Main({
  results,
  setSearch,
  pageNumber,
  setPageNumber,
  info,
}) {
  // ця наша сторінка якщо в неї є path /main. Сюди я прокинув results і тут буду по них мапитись

  let display;

  if (results) {
    display = results.map((item) => {
      let { id, name, image, species } = item;
// при кліку на img ми переходимо на <NavLink to={"/info/" + id}> яка нас перекине на новий роут
// який описаний на сторінці роутів <Route path="/info/:id" element={<Infopage />} />
// там буде вже новий запит але з врахуванням id персонажа (яке ми знаємо з головного запиту)
      return (
        <div className="griditem" key={id}>
          <NavLink to={"/info/" + id}> 
            <img className="gridimage" src={image} alt="pic" />
          </NavLink>

          <div className="infochar">
            <div className="name">{name}</div>
            <div className="species">{species}</div>
          </div>
        </div>
      );
    });
  } else {
    display = "No characters found";
  }

  return (
    <>
      <div className="abouttz">
        <NavLink to="/about">
          <h3> Технічне завдання проєкту</h3>
        </NavLink>
      </div>

      <img className="mainlogo" src={logo} alt="logo" />

      <Input setSearch={setSearch}
      setPageNumber={setPageNumber} />

      <div className="containergrid">{display}</div>
      <Pagination
        setPageNumber={setPageNumber}
        info={info}
        pageNumber={pageNumber}
      />
    </>
  );
}
