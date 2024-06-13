ReactDOM.render(
	<div>
		<Tweet
			username="dugoatboy"
			user="pswaff1"
			msg="First Tweet"
			date="NOW"
		/>
		<Tweet
			username="pswaff1"
			user="pa123456"
			msg="Second Tweet"
			date="LATER"
		/>
		<Tweet
			username="pa123456"
			user="dugoatboy"
			msg="Third Tweet"
			date="EVENTUALLY"
		/>
	</div>,
	document.querySelector("#root")
);
