import React from "react";
import { Link } from "react-router-dom";

export default function MenuItem({ pathname, children }) {
  return (
    <li>
      <Link to={pathname}>{children}</Link>
    </li>
  );
}
