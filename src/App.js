import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Home from "./Components/Home.js";
import Skills from "./Components/Skills.js";
import Work from "./Components/Work.js";
import Navbar from "./Components/navbar.js";



function App() {
  return (
    <div className="App">
   
 <Navbar/> 
<Home/>
<About/>
<Skills/>
<Work/>
<Contact/>
    </div>
  );
}

export default App;
