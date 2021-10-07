import logo from './logo.svg';
import './App.css';
import {useState} from "react" ;

function App() {
  const [like,setLike] = useState(0)
  const [ Boxx , setBoxx] = useState([null,null,null,null,null,null,null,null,null])
  const [Turn , setTurn] = useState(true)
  const handleClick = (index) =>{
    console.log("Clicked",index);

    if(Boxx[index]===null){ 
    let copyBoxx = [...Boxx]
    copyBoxx[index] =  Turn ? "X" :"O";
    setBoxx(copyBoxx)
  setTurn(!Turn)}
  };
  // [0,1,2,3,4,5,6,7,8]
  
// now we arre writing function to decide winnner
const decidewinder = (Boxx) => {
  const list = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

  ];

for(let i=0;i<list.length ;i ++)
{
  const[a,b,c] = list[i]
  if(Boxx[a]!=null && Boxx[a] ===  Boxx[b] && Boxx[b]=== Boxx[c])
  {
    console.log("the winner is", Boxx[a])
  }
}

  
}
decidewinder(Boxx)







  return (
    <div className="App">
      <div>
    <h1>folllowing button reflect in other component</h1>
    <button  onClick={()=> setLike(like+1)}  >click</button>
    <Component1 var = {like} />
    </div>

    <hr />
    <h1> tik tak to game</h1>
    <div className="mainbox">

   {/* to create nine box we can also do like this but see this is not dry code
   to make it dry and good code we use use state form rendering nine boxes ok
    */}
    {Boxx.map((value,index) =>(<Box Count={value} onPlayerClick={()=>handleClick(index)} />))}
    {/* <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box /> */}
    </div>
    </div>
  );
}

export default App;
function Component1(props)
{
  return <h1>{props.var}</h1>;
}


function Box(props)
{
 
  // const[Count , setCount] = useState(null)
  const styles={
    color:props.Count === "X"?"green":"red"
  }
  return (
  <div style={styles} className="box" 
  onClick = {props.onPlayerClick}
  // onClick={()=> (props.Count === "X"?"O":"X")}
  >{props.Count}</div>
  )
}