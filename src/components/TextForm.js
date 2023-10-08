import React, {useState} from 'react'
 

export default function TextForm(props) {
  const handleUpClick = () =>{
    //console.log("Uppercase was clicked: "+ text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () =>{
    //console.log("Uppercase was clicked: "+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCapitalClick = () =>{
      let newText = text.toLowerCase().split(' ');
      for (var i = 0; i < newText.length; i++) {
          // You do not need to check if i is larger than text length, as your for does that for you
          // Assign it back to the array
          newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);     
      }
      // Directly return the joined string
      setText (newText.join(' ')); 
  }

  const handleRemoveAllSpacesClick = () =>{
    

    //VARIOUS METHODS TO REMOVE ALL SPACES IN TEXT
    //let newText = text.split(" ").join("");
    //let newText = text.replace(/ /g, '');
    let newText = text.replaceAll(' ', '');

    //TO REMOVE ONLY 1ST SPACE
    //let newText = text.replace(/ /, '');
    setText(newText);
  }

  const handleExtraSpacesClick = () =>{
    
    let regexPattern = /\s+/g;
    let newText = text.replace(regexPattern, " ");
    setText(newText);
  }

  const handleClearClick = () => {   
    let newText = ("");
    setText(newText);
  }

  const handleCopy = () => {

    let newText = document.getElementById("Textarea");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const handleOnChange = (event) =>{
    //console.log("On Change");
    setText(event.target.value);
  }

   let [text, setText] = useState('');
  // text = "new text"; //wrong way to change the state
  // settext("new text"); //CORRECT way to change the state
  return (
  <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} 
          style={{backgroundColor: props.mode==='dark'?'#264653':'light',
                  color: props.mode==='dark'?'white':'black'
        }}
          id="Textarea" rows="8"></textarea>
        </div>

        <button className="btn btn-info mx-1" onClick={handleUpClick} >Convert to uppercase</button>

        <button className="btn btn-info mx-1" onClick={handleLowClick} >Convert to lowercase</button>

        <button className="btn btn-info mx-1" onClick={handleCapitalClick} >Capitalized Case
        </button>

        <button className="btn btn-info mx-1" onClick={handleRemoveAllSpacesClick} >Remove all spaces
        </button>

        <button className="btn btn-info mx-1" onClick={handleExtraSpacesClick} >Remove extra spaces
        </button>

        <button className="btn btn-info mx-1" onClick={handleCopy} >Copy text
        </button>

        <button className="btn btn-info mx-1" onClick={handleClearClick} >Clear text
        </button>
        
    </div>
    <div className='container my-3' style={{backgroundColor: props.mode==='dark'?'#264653':'white',
                                            color: props.mode==='dark'?'white':'black'
                                            }}>
        <h2>Your text summary</h2>
        <p><b>
          Words : {text.split(" ").length}   
          <br></br>          
          Characters : {text.length} 
          <br></br>
          
        </b></p>
        <p>{0.008 * text.split(" ").length} Minutes required to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
    </div>
  </>

  )
}
