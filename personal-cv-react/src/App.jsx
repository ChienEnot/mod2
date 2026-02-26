import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);

return (
    <div className="container"> 
        <Header /> 
        <About />
        <Skills />
        <Education />
        <Contact />
        
        <footer>
		<p>&copy; 2026 Chien Enot. All rights reserved. </p>
	    </footer>
    </div>
   

);
}
export default App;
