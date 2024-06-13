const Person = ({ name, age, hobbies }) => {
	const shortName = name.slice(0, 6);
	const intAge = parseInt(age);

	return (
		<div className="person">
			<p>Learn some information about this person</p>
			<div>
				<p>Name: {name.slice(0, 6)}</p>
				<p>Age: {age}</p>
				<h3>
					{parseInt(age) < 18 ? "You must be 18." : "Please go vote!"}
				</h3>
				<p>Hobbies</p>
				<ul>
					{hobbies.map((hobby) => (
						<li>{hobby}</li>
					))}
				</ul>
			</div>
		</div>
	);
};
