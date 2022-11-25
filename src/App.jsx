import "./App.css";

import { Cub3D } from "./components/cub-3D";
import { Shiba3D } from "./components/shiba-3D";
import { Text3D } from "./components/text-3D";


function App() {
  return (
    <div>
   
      <Text3D />
      <Shiba3D />
      <Cub3D />
    </div>
  );
}

export default App;
