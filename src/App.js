import React,{useState} from 'react';
import './App.css';
var cnt=0;
function App() {

  
  const[components,setcomponents]=useState([`Button ${cnt}`]);
  const[lstbtn,setlstbtn]=useState('');
 const setVals=(e,index)=>{
   e.preventDefault();
   console.log(index);
   setlstbtn(index);
 }
  const AddBtn=()=>{
    cnt++;
    setcomponents([...components,`Button ${cnt}`])
  }
  return (
    <div className="App">
    <div>
      <h1>Button Count: {cnt}</h1>
      <h1>Last button clicked :{lstbtn}</h1>
    </div>
         <button onClick={AddBtn}>Add Button</button>
         {components.map((val,index)=>{
           return(
             <div>
               <button key={index} onClick={(e)=> setVals(e,index)}>{val}</button>
             </div>
           );
         })}
    </div>
  );
}

export default App;
