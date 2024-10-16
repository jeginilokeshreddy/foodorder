import './App.css';
import { RouterProvider } from 'react-router-dom';
import routedata from "./pagepaths/Pagepath"

function App() {
  return (
    <div className="App">
      <RouterProvider router={routedata} />
    </div>
  );
}

export default App;
