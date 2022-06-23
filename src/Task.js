import React from "react";
import DescriptionAlerts from "./components/Alert";
import "./Task.css";
// export default function Task({ textDegerleri }) {
//   return (
//     <div>
//       <h2>Tasklar:{textDegerleri}</h2>
//     </div>
//   );
// }

export default function Task(props) {
  return (
    <div className="tasklar">
      <h2 style={{ textDecoration: "underline" }}>Tasks </h2>
      {props.textDegerleri}
      <DescriptionAlerts />
    </div>
  );
}
