/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronombres = ["mi", "tu"];
  let adjetivos = ["bajo", "rapido", "amable", "lindo", "feliz", "fuerte"];
  let sustantivos = ["libro", "arbol", "gorra", "guitarra", "pluma"];
  for (let i = 0; i < pronombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
      for (let k = 0; k < sustantivos.length; k++) {
        console.log(pronombres[i] + adjetivos[j] + sustantivos[k]);
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
