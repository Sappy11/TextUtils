//we hv to type rfc:react function based component

import React, { useState } from "react";
//usestate is a hook which helps to use class based component features in fucntion based components

export default function TextForm(props) {
  const handleUpClick = () => {
    //   console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowClick = () => {
    //   console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  //important to make onchange event so we can write in our textarea
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
    wordCounter();
    //through this phle toh text ki value jo assign krege voh rhegi
    //but afterwards it will be updated(state will update)
    //depending on what value user puts in the textarea
  };

  const handleClearClick = (event) => {
    let newText = " ";
    setText(newText);
    props.showAlert("TextBox Clear!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  };

  const handleExtraSpace = () => {
    //ajax code
    let newText = text.split(/[ ]+/); //this will select any text that has one or more than one space
    //and create an array for it
    setText(newText.join(" ")); //this will join the array elements again with only one space
    props.showAlert("Extra Spaces Removed!", "success");
  };

  const wordCounter = () => {
    // let wordcount=text.split(" ").length;
    if (text.trim() === "") {
      setwordCount(0);
    } else {
      let newText = text.split(/[ ]+/);
      let alterText = newText.join(" ");
      setwordCount(alterText.split(" ").length);
    }
  };
  //declare a new state variable, which we will call text
  const [text, setText] = useState("");
  const [wordcount, setwordCount] = useState(0);

  // text="new txt" wrong way to change the state
  // setText("new text");//right way to change the state
  return (
    <>
      <div className="container">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "Light" ? "white" : "#042743",
              color: props.mode === "Light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra spaces
        </button>
      </div>
      <div className="container my-3">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h1>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {wordcount} words and {text.length} characters{" "}
        </p>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {0.008 * text.split(" ").length} Minutes Read
        </p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {" "}
          Preview
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {text.length > 0 ? text : "Enter something to preview here"}
        </p>
      </div>
    </>
  );
}
