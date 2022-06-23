import React from "react";
import "./Header.css";

export default function Header() {
  const url = "https://cdn-icons-png.flaticon.com/512/4697/4697260.png";

  return (
    <div className="header">
      <h1>TODO LIST APP </h1>

      <img alt="" width={100} height={90} src={url}></img>
    </div>
  );
}
