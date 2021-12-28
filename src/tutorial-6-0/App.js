import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

function Route({ path, children, exact }) {
  const { pathname } = window.location;
  if (exact) {
    if (path === pathname) {
      console.log(exact);
      return children;
    }
  } else {
    if (pathname.includes(path)) {
      return children;
    }
  }
  return null;
}

export function App() {
  const { pathname } = window.location;
  return (
    <div className="App">
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/post">
        <Post id={pathname} />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Footer />
    </div>
  );
}
