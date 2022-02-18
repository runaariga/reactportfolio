
import Intro from "../src/components/intro/Intro"
import "./app.scss"
import { useState } from "react";
import Menu from "../src/components/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
     </div>
    </div>
  );
}

export default App;