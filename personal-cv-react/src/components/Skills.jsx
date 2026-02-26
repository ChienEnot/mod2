import { useState } from "react";


function Skills() {
	const [visible, setVisible] = useState(true);
return (
		<section className="card" id="skillsSection">
			<button onClick={() => setVisible(!visible)}>
				Show/Hide Skills
			</button>


			{visible && (
			<section>
			<h2>Skills</h2>
				<ul>
					<li>HTML</li>
					<li>Python</li>
					<li>Java</li>
				</ul>
				<ul>
					<li>Web Development
						<ul>
							<li>Frontend
								<ul>
									<li>HTML</li>
									<li>JavaScript</li>
								</ul>
							</li>
							<li>Backend</li>
						</ul>
					</li>
				</ul>
			</section>
				)}
		</section>
);
}
export default Skills;