import { useState } from "react";
import './Amrish2.css'

function Calc(){
    const[input,setInput]=useState("");
    const[result,setResult]=useState();
    const[love,setLove]=useState();


    return(
        <div>
            <h1>THE CALCULATOR</h1>
            <div id="style1">
                <div id="div1">
                    <input value={input} id="input1"  onChange={(e)=>{setInput(e.target.value)}}></input>
                </div>
                <div id="div2">
                <button id='btn1' onClick={()=>setInput(input+"1")}>1</button>
      <button id='btn2' onClick={()=>setInput(input+"2")}>2</button>
      <button id='btn3' onClick={()=>setInput(input+"3")}>3</button>
                </div>
                <div>
                <button id='btn+' onClick={()=>setInput(input+"+")}>+</button>
                </div>
                <div>
                <button id='btn4' onClick={()=>setInput(input+"4")}>4</button>
      <button id='btn5' onClick={()=>setInput(input+"5")}>5</button>
      <button id='btn6' onClick={()=>setInput(input+"6")}>6</button>
                </div>
                <div>
                <button id='subraction' onClick={()=>setInput(input+"-")}>-</button>
                </div>
                <div>
                <button id='btn7' onClick={()=>setInput(input+"7")}>7</button>
      <button id='btn8' onClick={()=>setInput(input+"8")}>8</button>
      <button id='btn9' onClick={()=>setInput(input+"9")}>9</button>
                </div>
                <div>
                <button id='multiple' onClick={()=>setInput(input+"*")}>*</button>
                <button id='btn0' onClick={()=>setInput(input+"0")}>0</button>
                </div>
                <div>
                <button id='btn.' onClick={()=>setInput(input+".")}>.</button>
      <button id='eval' onClick={()=>setResult(eval(input))}>=</button>
      <button id='btn/' onClick={()=>setInput(input+"/")}>/</button>
                </div>
                <div>
                <button id='clear' onClick={()=>{setInput("");setResult("");
      }}>clear</button>
                </div>
                <div>
                    <input id="input2" value={result}></input>
                </div>
            </div>

        </div>
    );
}
export default Calc