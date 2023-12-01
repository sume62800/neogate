import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick =()=>{
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const handleloClick =()=>{
        let newtext= text.toLowerCase();
        setText(newtext)
    }

    const handleOnChange  =(Event)=>{
        setText(Event.target.value);
    }
    const[text,setText]=useState("Enter text here");

    return (
        <>
        <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
            <br />
            <h2>{props.heading}</h2>
            <br />
        
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#1c1818',color:props.mode==='dark'?'white':'black'}} id="myBox" cols="20" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleloClick}>Convert to Lowercase</button>
        </div>
        <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
            <h4>Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h4>Preview</h4>
        
            <p>{text.length>0 ?text:"Enter the Text to analyze"}</p>

        </div>
        </>
    )
}
  