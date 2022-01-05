import React from "react";
import { Route, Routes } from "react-router";
import { RequireAuth } from "./hoc/RequireAuth";
import { Loyalot } from "./components/Loyalot";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { Private } from "./pages/Private";
import { AuthProvider } from "./hoc/AuthProvider";
import { Post } from "./pages/Posts";

export const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Loyalot />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="private"
            element={
              <RequireAuth>
                <Private />
              </RequireAuth>
            }
          />
          <Route
            path="post"
            element={
              <RequireAuth>
                <Post />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
