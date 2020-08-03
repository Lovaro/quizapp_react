import React from "react";
import "./componentes/styles/main.scss";
import CardContainer from "./componentes/CardContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Questions from "./componentes/Questions";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Preguntados</h1>
        <p>Selecciona la Cartegria deseada</p>

        <Route exact path="/">
          <CardContainer />
        </Route>
        <Route exact path="/questions/:id">
          <Questions />
        </Route>
      </div>
    </Router>
  );
}

export default App;
