import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Questions = () => {
  const [questions, setQuestions] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://5f26fcaf0824d8001655edd9.mockapi.io/categories/${id}/questions`
      )
      .then((response) => {
        setQuestions(response.data);
      });
  }, [id]);

  return <div>{questions && <Questions data={questions[0]} />}</div>;
};

export default Questions;
