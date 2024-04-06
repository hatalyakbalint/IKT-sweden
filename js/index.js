const size = 50;

const blocks = ["1. Stockholm", "2. hellomad", "3. baconking burger", "4. some", "5. areally long city because why not"];
const gradients = [];

/*const tressholds = [];
for(let i = 0.00; i <= 1; i+=0.01)
{
	tressholds.push(i);
}*/

onload = () => {
	const dots = document.getElementById("dots");
	for(let i = 0; i < blocks.length; i++)
	{
		const dot = dots.appendChild(document.createElement("div"));
		dot.style.borderRadius = "100%";
		dot.style.width = `${size}px`;
		dot.style.height = `${size}px`;
		dot.addEventListener("click", () => location.href = `#${i + 1}`);

		const text = dot.appendChild(document.createElement("a"));
		text.innerText = blocks[i];
		text.href = `#${i + 1}`;

		gradients.push(dot);

		/*new IntersectionObserver((entries, observer) => {
			entries.forEach(e2 => {
				if(e2.isIntersecting)
				{
					console.log(e2.intersectionRatio, e2.target);
				}
			});
		}, { threshold: tressholds}).observe(document.getElementById(i + 1));*/

		if(i >= blocks.length - 1) break;
		const line = dots.appendChild(document.createElement("div"));
		line.style.width = `${size*3}px`;
		line.style.height = `${size/4}px`;
		
		gradients.push(line);
	}
}

document.addEventListener('scroll', () => {
	
});

/*function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("dots").style.width = scrolled + "%";
}*/