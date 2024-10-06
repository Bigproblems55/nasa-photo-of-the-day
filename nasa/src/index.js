import React from "react";
import {createRoot} from "react-dom/client";
import Vplayer from "./components/Vid/Vplayer";
// import Container from "./components/Container/Container";
import "./index.css";
import Container from "./components/Container/Container";
import App from "./App";


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />, document.getElementById("root"));
// root.render(<Container />, document.getElementById("r"));
// ReactDOM.render(<Vplayer />, document.getElementById("rr"));

