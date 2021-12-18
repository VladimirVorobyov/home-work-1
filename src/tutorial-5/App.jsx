import React from "react";
import { Reviews } from "./components/ Reviews";
import { Form } from "./components/Form";
import "./App.scss";

export const App = () => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    const commentTo = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(commentTo);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const listImg = ["/angry.png", "/sleeping.png", "/smile.png", "/puke.png"];

  const getRandome = (list) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  const addTask = (value) => {
    setComments([
      ...comments,
      { ...value, createdAt: new Date(), img: getRandome(listImg) },
    ]);
  };
  const deleteTask = (el) => {
    setComments(comments.filter((item) => item.createdAt !== el));
  };
  return (
    <div>
      <Reviews list={comments} deleteTask={deleteTask} />
      <Form addTask={addTask} />
    </div>
  );
};
