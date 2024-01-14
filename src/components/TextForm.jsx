import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    setText(" ");
  };

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        {/* <button className="btn btn-info mx-2" onClick={handleDownload}>
          Dawnload teaxt
        </button> */}
      </div>
      <div className="container my-3">
        <h2>Your text summery</h2>
        <p>
          {text.split(" ").length} words and {text.length} Charecters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
