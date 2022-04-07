console.log("connected");

const date = document.querySelector(".score h3 span");

function formatString(num) {
	const formatted = num.toString().padStart(2, "0");
	return formatted;
}

// Live timer since creation of the game
if (date) {
	try {
		function updateTimer() {
			const currentDate = Date.now();
			const lifetime = currentDate - creationDate;
			let seconds = (lifetime / 1000) | 0;
			let minutes = (lifetime / 1000 / 60) | 0;
			let hours = (lifetime / 100 / 60 / 60) | 0;
			seconds = seconds % 60;
			minutes = minutes % 60;
			hourse = hours % 24;
			const text = `${formatString(minutes)}:${formatString(seconds)}`;
			display.innerText = text;
		}
		const header = document.querySelector("h3:nth-of-type(2)");
		const display = document.createElement("p");
		const creationDate = parseInt(date.innerText);

		header.after(display);
		display.classList.add("counter");

		updateTimer();
		setInterval(updateTimer, 500);
	} catch (err) {
		console.log(err);
	}
}
