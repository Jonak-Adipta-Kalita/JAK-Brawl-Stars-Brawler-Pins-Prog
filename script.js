const dex = document.getElementById('dex');
const fetchPins = async () => {
    const res = await fetch("https://jak_api.p.rapidapi.com/brawlStars", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "jak_api.p.rapidapi.com",
			"x-rapidapi-key": "d3474315fcmshe6f03eb826f16bcp181f82jsn7d262d2601be"
		}
	});
	const data = await res.json();
	const pins = [];
	console.log(data);
	data.brawlers.map((result) => result.pins.map((result) => pins.push(result)));
	const pins_ = pins.reduce((acc, curVal) => pins.concat(curVal));
	console.log(pins_)
	displayPins(pins);
};

const displayPins = (pin) => {
    const pinsHTMLString = pin
        .map((pien) => (`
			<li class="card">
				<img class="card-image" src="https://jak-api.vercel.app${pien.image}"/>
			</li>
		`)).join('');
    dex.innerHTML = pinsHTMLString;
};

fetchPins();
