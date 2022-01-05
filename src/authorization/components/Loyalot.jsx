import React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export const Loyalot = () => {
  const navigate = useNavigate();
  const { obj, signout } = useAuth();
  const getOf = () => {
    signout(() => navigate("/", { replace: true }));
  };
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Link to="/" style={{ paddingRight: "90px" }}>
            Home
          </Link>
          <Link to="/post" style={{ paddingRight: "90px" }}>
            Posts
          </Link>
          <Link to="/private">Private</Link>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, padding: "0 90px" }}
          >
            Company name
          </Typography>
          {obj === null ? (
            <Link to="/login">Login</Link>
          ) : (
            <button onClick={getOf}>Log Out</button>
          )}
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};
