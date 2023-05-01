import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "./../../../img/arrow.png";

export default function Infopage() {
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, image, species, gender, status, type, origin } = fetchedData;

  useEffect(() => {
    (async function () {
      // створив iife для запиту
      let data = await fetch(api) // отримані сирі дані треба конвертувати в json формат, пишемо then
        .then((res) => res.json());
      updateFetchedData(data); // сетаємо наші отримані дані в fetchedData
    })();
  }, [api]);

  const displayType = type || "Unknown";
  const displayOrigin = origin?.name || "Unknown";

  return (
    <div>
      <div className="bnt">
        <NavLink to={"/"}>
          {" "}
          <img className="arrow" src={arrow} alt="arrow" /> GO BACK
        </NavLink>
      </div>

      <div>
        <div>
          <img className="cardimage" src={image} alt="person" />
          <div className="cardname">{name}</div>
          <div className="cardinformation">
            <h4>Information</h4>
            <h2>Gender</h2>
            <div>{gender}</div>
            <h2>Status</h2>
            <div>{status}</div>
            <h2>Species</h2>
            <div>{species}</div>
            <h2>Origin</h2>
            <div>{displayOrigin}</div>
            <h2>Type</h2>
            <div>{displayType}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
