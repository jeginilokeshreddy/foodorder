import {useEffect,useState} from "react"
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routedata from "./pagepaths/Pagepath"

function App() {
  const [sameplevalue, setSamplevalue] = useState(null);
  // const smaplevalueupdate=()=>{
  //   setSamplevalue("jegini")
  //   console.log("llllllll")
  // }
  // setInterval(()=>{
  //   smaplevalueupdate()
  // },2000)
   setInterval(() => {
     setSamplevalue(sameplevalue + 1);
   }, 5000);
  useEffect(() => {
    console.log(`data forminside useeffect${sameplevalue}`);
  }, [sameplevalue]);

  return (
    <div className="App">
      {console.log("data from inside compoent")}
      <h1>{sameplevalue}</h1>
      {/* <button onClick={()=>{
        smaplevalueupdate()
      }}> click</button> */}
      <RouterProvider router={routedata} />
    </div>
  );
}

export default App;
