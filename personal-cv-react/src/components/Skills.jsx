import { useState } from "react";
import Card from "./Card";

function Skills({ skills }) {
	const [visible, setVisible] = useState(true);

return (
		<section>
			<button onClick={() => setVisible(!visible)}>
				Show/Hide Skills
			</button>


			{visible && (
			<section>
			<Card title="Skills">
				<ul>
					{skills.map((skills, index) => (
						<li key={index}>{skills}</li>
					))}
					
				</ul>
				
			</Card>
			</section>
				)}
		</section>
);
}
export default Skills;