import React, { useEffect, useState } from "react";
import { CardPost } from "../components/Card";

export const Home = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setValue(json));
  }, []);
  console.log(value);
  return value.map((item) => <CardPost key={item.id} item={item} />);
};
