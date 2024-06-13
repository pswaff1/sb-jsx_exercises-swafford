ReactDOM.render(
	<div>
		<Person
			name="patrick"
			age="31"
			hobbies={["Swimming", "Watching Youtube", "Working on cars"]}
		/>
        <Person
			name="nicole"
			age="28"
			hobbies={["TikTok", "Social Media", "Reborn Dolls"]}
		/>
        <Person
			name="trystan"
			age="19"
			hobbies={["exploring the city", "Watching Youtube", "the legal system"]}
		/>
	</div>,
	document.querySelector("#root")
);
