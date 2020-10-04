import React ,{useState} from 'react'
import './Calculator.css'
const Calculator = () => 
{
  const [cValue,setcValue]=useState('');
  const [preValue,setpreValue]=useState('');
  const [cOperation,setcOperation]=useState('');
  const [Result,setResult]=useState('');
  const [Display,setDislay]=useState('');
  var res='';
  function ButtonNumberEvent(e){
    var temp=e.target.value;
    setcValue(prev=>prev+temp);
    setDislay(prev=>prev+temp);
  }
  
  function ButtomActionEvent(e)
  {
    var temp=e.target.value;
    setDislay(prev=>prev+temp);
    if(preValue==='')
    {
      setpreValue(cValue);
      setcValue('');
      setcOperation(e.target.value)
      
    }

    if(preValue!==''){
     
      setcValue(res);
      setcOperation(e.target.value)      
    }
    
  }
  function ButtonResultEvent()
  {
    
    if(cOperation==='+'){
        res=parseFloat(preValue)+parseFloat(cValue);
        setpreValue(res);
    }
    else if(cOperation==='-'){
      res=parseFloat(preValue)-parseFloat(cValue);
      setpreValue(res);
    }
    else if(cOperation==='x'){
      res=parseFloat(preValue)*parseFloat(cValue);
      setpreValue(res);
    }
    else if(cOperation==='/'){
      res=parseFloat(preValue)/parseFloat(cValue);
      setpreValue(res);
    }
    else{
      res=0;
    }
    setResult(res);
   
  }
  function ButtonClearEvent()
  {
    setResult('');
    setcOperation('');
    setcValue('');
    setpreValue('');
    setDislay('');
  }


  
  return(    
            <div class="calculator">    
            <input type="text" class="calculator-screen" value={Display}/>
            <h1 type="text" class="calculator-screen">{Result}</h1>
            <div class="calculator-keys">
            <button type="button" class="operator" value="+" onClick={ButtomActionEvent}>+</button>
            <button type="button" class="operator" value="-" onClick={ButtomActionEvent} >-</button>
            <button type="button" class="operator" value="x" onClick={ButtomActionEvent}>&times;</button>
            <button type="button" class="operator" value="/" onClick={ButtomActionEvent}>&divide;</button>
            <button type="button" value="7" onClick={ButtonNumberEvent}>7</button>
            <button type="button" value="8" onClick={ButtonNumberEvent}>8</button>
            <button type="button" value="9" onClick={ButtonNumberEvent} >9</button>
            <button type="button" value="4" onClick={ButtonNumberEvent}>4</button>
            <button type="button" value="5" onClick={ButtonNumberEvent}>5</button>
            <button type="button" value="6" onClick={ButtonNumberEvent}>6</button>
            <button type="button" value="1" onClick={ButtonNumberEvent} >1</button>
            <button type="button" value="2" onClick={ButtonNumberEvent}>2</button>
            <button type="button" value="3" onClick={ButtonNumberEvent}>3</button>
            <button type="button" value="0" onClick={ButtonNumberEvent}>0</button>
            <button type="button" class="decimal" value="." onClick={ButtonNumberEvent}>.</button>
            <button type="button" class="all-clear" value="all-clear" onClick={ButtonClearEvent}>AC</button>
            <button type="button" class="equal-sign" value="=" onClick={ButtonResultEvent}>=</button>
           </div>
           </div>
            
    )
  }

  export default Calculator
