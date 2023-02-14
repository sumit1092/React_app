import React,{useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("");
  // setText("Enter Here");

  const changeClick = (event)=>{
    // console.log("on changed")
    setText(event.target.value);
  }

  const UpperCase=()=>{
    // console.log("on Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  }

  const LowerCase=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "success");
  }

  const Capitalcase=()=>{
    let newText = text.charAt(0).toUpperCase()+text.slice(1);
    let pretext = text.toUpperCase();
    if(text === pretext){
      const lower = pretext.toLowerCase();
      let Text = lower.charAt(0).toUpperCase()+lower.slice(1);
      setText(Text);
    }else{
      setText(newText);
    }
    props.showAlert("converted to Capitalcase", "success");
  }

  const ClearText=()=>{
    let newText = '';
    setText(newText);
  }

  const handleCopy=()=>{
    // console.log("copy");
    // let text = document.getElementById("exampleFormControlTextarea1");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("copied to the clipboard", "success");
  }

  const handleSpace=()=>{
    // console.log("remove space")
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed", "info");
  }
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
         <label for="exampleFormControlInput1" className="form-label">Email address</label>
         <input type="email" className="form-control"style = {{backgroundColor: props.mode === 'dark'?'grey':'#e4e5f5', 
         color:props.mode==='dark'?'white':'black'}} id="exampleFormControlInput1" placeholder="name@example.com"/>
       </div>
       <div className="mb-3">
         <label for="exampleFormControlTextarea1" className="form-label">Textarea</label>
         <textarea className="form-control" value={text} onChange={changeClick} style = {{backgroundColor: props.mode === 'dark'?'grey':'#e4e5f5', 
         color:props.mode==='dark'?'white':'black'}} placeholder='Write..' id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
     <button disabled={text.length===0} style={{color:props.mode === 'light'? 'black':'white'}} className="btn btn-outline-warning mx-2 my-1" 
     onClick={UpperCase} >Convert to Uppercase</button>
     <button disabled={text.length===0} style={{color:props.mode === 'light'? 'black':'white'}} className="btn btn-outline-info mx-2 my-1" 
     onClick={LowerCase} >Convert to Lowercase</button>
     <button disabled={text.length===0} type='button' className='btn btn-outline-primary mx-2 my-1'onClick={Capitalcase} >Convert to Capitalcase</button>
     <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={ClearText} >Clear Text</button>
     <button disabled={text.length===0} type='button' className="btn btn-outline-info mx-2 my-1" onClick={handleCopy} >Copy</button>
     <button disabled={text.length===0} type='button' className="btn btn-primary mx-2 my-1" onClick={handleSpace} >Remove Space</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summery</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      {/* \s = by a space , white space including new line it handle new line space */}
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute reading</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'write something for preview'}</p>
    </div>
    </>
  )
}
