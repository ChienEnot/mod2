import profilePic from "../assets/profile.png";

function About() {
return (

    <section className="card">
			<h2>About Me</h2>
			<img src={profilePic}  alt="Profile photo"/>
			<p> I am 21 years old, turning 22 in October 6, 2004. I live in Valencia City, Bukidnon.</p>
			<p>Email:
				<a href="mailto:enot.chien@gmail.com">enot.chien@gmail.com</a><br/>
				GitHub:
				<a href="https://github.com/ChienEnot" target="_blank">github.com/ChienEnot</a>
			</p>
		</section>
);
}
export default About;