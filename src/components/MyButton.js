import { useState } from "react";
import React from "react";

function MyButton(props) {
    const [text, setText] = useState("");
    function change(){
        let newText = text.toLowerCase()
        setText(newText)
    }

    function handleOnChange(event){
        console.log("button clicked")
        setText(event.target.value)
    }
  
  return (
    <>
      <div className="container">
       
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              className="form-control"
              value = {text}
              onChange = {handleOnChange}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <button onClick={change}>{props.button}</button>
          </div>
        
      </div>
    </>
  );
}

export default MyButton;
