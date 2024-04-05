const size = 50;

const blocks = ["1. Stockholm", "2. hellomad", "3. baconking burger", "4. some", "5. areally long city because why not"];

onload = () => {
	const dots = document.getElementById("dots");
	for(var i = 0; i < blocks.length; i++)
	{
		const dot = dots.appendChild(document.createElement("div"));
		dot.style.borderRadius = "100%";
		dot.style.width = `${size}px`;
		dot.style.height = `${size}px`;

		const text = dot.appendChild(document.createElement("p"));
		text.innerText = blocks[i];

		if(i >= blocks.length - 1) break;
		const line = dots.appendChild(document.createElement("div"));
		line.style.width = `${size*3}px`;
		line.style.height = `${size/4}px`;
	}
}

/*document.querySelectorAll(".animation").forEach(e => {
	new IntersectionObserver((entries, observer) => {
		entries.forEach(e2 => {
			if(e2.isIntersecting)
			{
				
			}
		});
	}).observe(e);
});*/

document.addEventListener('scroll', () => {
	
});

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("dots").style.width = scrolled + "%";
}