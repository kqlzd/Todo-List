import { useState, useRef } from "react";
import Header from "./components/Header";
import Task from "./Task";
import "./App.css";
import DescriptionAlerts from "./components/Alert";
import LinearIndeterminate from "./Linear";

function App() {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);
  const inputRef = useRef();

  const alertMessage = () => {
    <DescriptionAlerts />;
  };

  const ekle = () => {
    setTextList([...textList, { text }]);
    alertMessage();
  };

  const sil = (index) => {
    return setTextList([...textList].splice(1));
  };

  return (
    <div className="App" style={{ backgroundColor: "rgb(172 172 172)" }}>
      <h2
        style={{
          fontFamily: "Cambria, Cochin, Times, Times New Roman, serif",
          color: "#ededed",
          fontSize: "xx-large",
        }}
      >
        Todo App
      </h2>
      <LinearIndeterminate />
      <div
        style={{
          display: "inline-block",
          border: "1px solid white",
          borderRadius: 8,
          backgroundColor: "#004F7F",
          marginTop: 50,
        }}
      >
        <Header />
        <br />
        <br />
        <br />
        <br />
        <label
          style={{
            fontSize: "x-large",
            fontFamily: "serif",
            color: "white",
          }}
        >
          What are you going to do?
        </label>
        <br />
        <input
          style={{
            padding: 12,
            width: 350,
            display: "inline-block",
            borderRadius: 8,
            border: "2px solid white",
          }}
          type="text"
          placeholder="Enter your task..."
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <br />
        <button
          style={{ marginBottom: 10 }}
          className="button"
          onClick={() => {
            ekle();
          }}
        >
          ADD
        </button>

        <br />

        {textList.map((listElement) => {
          return <Task textDegerleri={listElement.text} />;
        })}
        <button
          DeleteForeverIcon
          className="button"
          onClick={() => {
            sil();
          }}
        >
          {" "}
          DELETE
        </button>
      </div>
    </div>
  );
}

export default App;
