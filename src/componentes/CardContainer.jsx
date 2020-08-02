import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const CardContainer = (props) => {
  const [Categoryes, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("https://5f26fcaf0824d8001655edd9.mockapi.io/categories")
      .then((response) => {
        setCategory(response.data);
        console.log("soy el resp", response);
      });
  }, []);

  return (
    <div>
      {Categoryes.map((category) => {
        return (
          <Card src={category.img} name={category.name} key={category.id} />
        );
      })}
    </div>
  );
};

export default CardContainer;
