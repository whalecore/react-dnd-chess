import React from "react";
import ReactDOM from "react-dom/client";

import { observe } from "./components/Game";
import Board from "./components/Board";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

observe((knightPosition) => root.render(<Board knightPosition={knightPosition} />));
