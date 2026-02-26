import {useState} from "react";

function Header() {
	const [darkMode,setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode(!darkMode);
		document.body.classList.toggle("dark-mode");
	};

return (

<header>
	 
	<button onClick={toggleTheme}> 
        Toggle Dark Mode 
    </button>  
		<section className="card">
			<h1>Chien Maureen M. Enot</h1>
			<p> IT Student | Web Systems and Technologies </p>
		</section>
</header>
);
}
export default Header;