import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const skills = ["HTML","CSS","JavaScript","React"];
   
    const education = [
        {
            year: "2024-2028",
            program: "BS Information Techonlogy" ,
            school: "USTP - CDO Campus"
        },
        {
            year: "2021-2023" ,
            program: "Senior High(STEM)" ,
            school: "CMU LAB"
        },
        {
            year: "2017-2021",
            program: "Junior High" ,
            school: "CMU LAB"
        },
        {
            year: "2011-2017" ,
            program: "Grade School",
            school: "School of the Morning Star"
        },
        {
            year: "2009-2011" ,
            program: "Kindergarten" ,
            school: "BBIS"
        }
    ];

return (
    <div className="container"> 
        <Header /> 
        <About />
        <Skills skills = {skills} />
        <Education education={education} />
        <Contact />
        
        <footer>
		<p>&copy; 2026 Chien Enot. All rights reserved. </p>
	    </footer>
    </div>
);
}

export default App;
