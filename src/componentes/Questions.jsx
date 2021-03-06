import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Question from "./Question";

const Questions = () => {
  const [questions, setQuestions] = useState(null);
  const [indice, setIndice] = useState(0);
  const [answers, setAnswers] = useState([]);

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

  return <div>{questions && <Question data={questions[0]} />}</div>;
};

export default Questions;
