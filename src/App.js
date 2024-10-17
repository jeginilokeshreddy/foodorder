import {useEffect,useState} from "react"
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routedata from "./pagepaths/Pagepath"

function App() {
  const [sameplevalue, setSamplevalue] = useState(null);
  
  return (
    <div className="App">
      {console.log("data from inside compoent")}
      <h1>{sameplevalue}</h1>
      <RouterProvider router={routedata} />
    </div>
  );
}

export default App;
