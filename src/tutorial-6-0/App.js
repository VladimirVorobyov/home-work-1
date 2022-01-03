import React from "react";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Routes, Route, Navigate } from "react-router-dom";
import { Eror } from "./pages/Eror";
import { Loyalot } from "./components/Loyalot";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Loyalot />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<Post />} />
          <Route path="about" element={<About />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="profile" element={<About />} />
          <Route path="*" element={<Eror />} />
        </Route>
      </Routes>
    </>
  );
}
