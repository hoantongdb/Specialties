import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import "./style/style.scss";
<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
);


