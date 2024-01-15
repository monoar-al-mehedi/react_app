import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    setText(" ");
  };
  // const handleCopy = () => {
  //   var text = document.getElementById("myBox");
  //   text.select();
  //   text.setSelectionRange(0, 999);
  //   navigator.clipboard.writeText(text.value);
  //   props.showAlert("Copied to Clipboard!", "success");
  // };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extra space!", "success");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        {/* <button className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button> */}
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>
          Remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} Charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
