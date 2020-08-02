import React from "react";
import "./componentes/styles/main.scss";
import CardContainer from "./componentes/CardContainer";
import Card from "./componentes/Card";

function App() {
  return (
    <div className="container">
      <h1>Preguntados</h1>
      <p>Selecciona la Cartegria deseada</p>
      <CardContainer />
    </div>
  );
}

export default App;
