import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();
  const [value, setState] = useState(0);
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  useEffect(() => {
    console.log("При изменении state id");
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);
  useEffect(() => {
    console.log("При первоначальным");
  }, []);
  useEffect(() => {
    console.log("При перерисовки компонента");
  });
  return (
    <div>
      <h1>Статья № {id}</h1>
      <p>{post.title}</p>
      <button onClick={goBack}>Назад</button>
      <div>{value}</div>
      <button onClick={() => setState((prev) => prev + 1)}>Plus</button>
    </div>
  );
};
