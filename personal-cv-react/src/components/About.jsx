import profilePic from "../assets/profile.png";
import Card from "./Card";

function About() {
return (
        <Card title="About Me">
			<img src={profilePic}  alt="Profile photo"/>
			<p> I am 21 years old, turning 22 in October 6, 2004. I live in Valencia City, Bukidnon.</p>
			<p>Email:
				<a href="mailto:enot.chien@gmail.com">enot.chien@gmail.com</a><br/>
				GitHub:
				<a href="https://github.com/ChienEnot" target="_blank">github.com/ChienEnot</a>
			</p>
		</Card>
);
}
export default About;