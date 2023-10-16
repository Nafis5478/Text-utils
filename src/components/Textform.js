import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
      console.log("upclicked"+ text);
      let newText=text.toUpperCase();
      setText(newText);
      props.showalert('Converted to uppercase','success');
    }
    const handleLoClick=()=>{
      console.log("loclicked"+ text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showalert('Converted to lowercase','success');
    }
  const handleClearClick=()=>{
      console.log("cleared"+ text);
      let newText='';
      setText(newText);
      setBtntxt('Copy');
      props.showalert('Text cleared!','success');
    }
    const handleOnchange=(event)=>{
      console.log("onchange");
      setText(event.target.value);
    }
    const handleCopyClick=()=>{
      let text=document.getElementById('mybox');
      text.select();
      navigator.clipboard.writeText(text.value);
      setBtntxt('copied/copy again');
      props.showalert('Text copied!','success');
    }
    const handleRemovespaceslick=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
    }
    const [text,setText]=useState('');
    const [btntxt, setBtntxt] = useState('Copy');
    // setText("changed");
    
  return (

    <>
          <div className="container">
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='light'?'white':'#343a40',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>        
        <button className="btn btn-pirmary" button-dark onClick={handleUpClick} style={{color: props.mode==='light'?'#343a40':'white'}}>Convert to Uppercase</button>
        <button className="btn btn-pirmary" onClick={handleLoClick} style={{color: props.mode==='light'?'#343a40':'white'}}>Convert to Lowercase</button>
        <button className="btn btn-pirmary" onClick={handleClearClick} style={{color: props.mode==='light'?'#343a40':'white'}}>Clear</button>
        <button className="btn btn-pirmary" onClick={handleCopyClick} style={{color: props.mode==='light'?'#343a40':'white'}}>{btntxt}</button>
        <button className="btn btn-pirmary" onClick={handleRemovespaceslick} style={{color: props.mode==='light'?'#343a40':'white'}}>Remove Spaces</button>
   
          </div>
        <div className="container" style={{color: props.mode==='light'?'#343a40':'white'}}>

          <h1>Your text summary is here</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <h1>Time taken to read this sentences</h1>
          <p>{text.split(" ").length*.008*60} seconds</p>
        </div>
        <h1 style={{color: props.mode==='light'?'#343a40':'white'}}>Priview your text here</h1>
        <div className="container" style={{color: props.mode==='light'?'#343a40':'white'}}>
          <p>
              {text.length>0?text:'Enter something in texbox above to preview'}  
          </p>
        </div>
    </>
   
  )
}
