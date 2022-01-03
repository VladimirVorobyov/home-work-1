import React from "react";
import { Link, useMatch } from "react-router-dom";

export const CostomeLink = ({ children, to, ...props }) => {
  const match = useMatch(to);
  return (
    <Link to={to} style={{ color: match ? "gold" : "green" }} {...props}>
      {children}
    </Link>
  );
};
