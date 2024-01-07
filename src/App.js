import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Infopage from "./components/mainpage/infopage/Infopage";
import Main from "./components/mainpage/Main/Main";
import React, { useState, useEffect } from "react";
import PermissionFB from "./components/mainpage/infopage/PermissionFacebook/PermissionFB";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import About from "./components/mainpage/Main/About";

////// App.js - це наш основний компонент який має обовязково через return малювати всі інші
// дочірні конпоненти по переданих роутах
// також в ньому ми створюємо через хук useState головні стейти які потім будемо передавати далі в компоненти

function App() {
  // створюю стейт з значенням pageNumber якщо б в нас була пагінація
  let [pageNumber, setPageNumber] = useState(1);

  let [search, setSearch] = useState(""); // ???

  // створюю стейт для отриманих даних з fetch в useEffect
  let [fetchedData, updateFetchedData] = useState([]); // передаємо пустий масив так як очікуємо отримати масив після fetch

  let { results, info } = fetchedData; // роблю деструктуризацію великого обєкту на менші щоб отримати просто results з персонажами

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`; // створюю змінну з апі строкою запиту
  // ми робимо цю арі динамічною для того щоб діставати специфічний запит, це у нас розписано в 
  // апі доках. І ми це передаємо в query. Такі речі як номер сторінки або імя персонажа
  // по дефолту ідуть всі, але якщо зазначена пагінація (в нас 1) 
  // або name тоді дістанеться щось конкретне (не залежно від пагінації)
  // в даному випадку запит іде на page 1 і name те що було введено в input і засеталось в search
  // єдине що не ясно чому підтягує name просто по 1 символу (це напевно десь описано в беку)



  // useEffect мені потрібний для того щоб робити ефект запиту на сервер щоразу як завантажиться наш APP
  useEffect(() => {
    (async function () {
      // створив iife для запиту
      let data = await fetch(api) // отримані сирі дані треба конвертувати в json формат, пишемо then
        .then((res) => res.json());
      updateFetchedData(data); // сетаємо наші отримані дані в fetchedData
    })();
  }, [api]); // щоразу як api в параметрі watch[] зміниться я буду отримувати нові дані з fetch.
  // Якщо була б пагінація при кліку на іншу сторінку я б тригерив ф-ю setPageNumber і
  //наш pageNumber мінявся і ішов новий запит на сервер. В результаті видача персонажів змінилася б

  // створюю колбек ф-ю яка буде сортувати масив по імені
  function compareByName(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  let sortedData;
  if (results) {
    sortedData = results.sort(compareByName).slice(0, 8); // слайс тут для того щоб ми повертали тільки 8
  }

  // передаю отримані і відсортовані results (тепер вони sortedData) в компоненту Main


  return (
    <div className="App">
      <Routes>
        <Route
          path="/" // цей path="/" означає що цей елемент буде на корінневій сторінці
          element={
            <Main
              info={info}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              results={sortedData}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/info/:id" element={<Infopage />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/permission" element={<PermissionFB />} />
      </Routes>
    </div>
  );
}

export default App;
