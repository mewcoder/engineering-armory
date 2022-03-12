import _ from 'lodash';
import "./style.css";
import icon from "./icon.png";


const div = document.createElement("div");
div.innerHTML = 'hello webpack';
div.className = "red";
document.body.appendChild(div);



const img = new Image();
img.src = icon;
document.body.appendChild(img);


setTimeout(() => {
  import(/* webpackChunkName: "load" */ './load.js').then(({ load }) => {
    load();
  })
}, 3000);