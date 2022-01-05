import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Post = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [serchPr, setSerchPr] = useSearchParams();
  const postQwery = serchPr.get("post") || "";

  const onPost = () => {
    const params = {};
    if (value) params.post = value;
    setSerchPr(params);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);
  const getValue = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <div>
      <div>
        <span style={{ marginRight: "50px" }}>
          <input type="text" value={value} onChange={getValue} />
          <button onClick={onPost}>ADD</button>
        </span>
      </div>

      <ul>
        {list
          .filter((post) => post.title.includes(postQwery))
          .map((el) => (
            <li key={el.id}>{el.title}</li>
          ))}
      </ul>
    </div>
  );
};
