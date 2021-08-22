const dex = document.getElementById('dex');
const fetchPins = async () => {
    const url = "/pins.json";
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	const pins = data.results.map((result, index) => ({
		...result,
		id: index + 1,
		image: `./images/${result.image}`
	}));
	displayPins(pins);
};

const displayPins = (pin) => {
    const pinsHTMLString = pin
        .map((pien) => (`
			<li class="card">
				<img class="card-image" src="${pien.image}"/>
			</li>
		`)).join('');
    dex.innerHTML = pinsHTMLString;
};

fetchPins();
