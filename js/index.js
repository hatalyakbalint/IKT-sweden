const size = 50;

const ads = [
	{ file: "ads1.png", name: "Svéd túra legjobb dolog!!", link: "#" },
	{ file: "ads2.png", name: "Vedd meg most a jegyed a Svéd túrára!!", link: "#" },
];
//const blocks = ["1.<br> Stockholm", "2.<br> Örebro", "3.<br> Göteborg", "4.<br> Helsingborg", "5.<br> Koppenhága"];
const blocks = ["<br>Vásárlás!", "<br>Stockholm", "<br>Örebro", "<br>Göteborg", "<br>Helsingborg", "<br>Koppenhága"];
//const blocks = ["Stockholm", "Örebro", "Göteborg", "Helsingborg", "Koppenhága"];
const gradients = [];

/*const tressholds = [];
for(let i = 0.00; i <= 1; i+=0.01)
{
	tressholds.push(i);
}*/

var popup_template;

function random_int(min, max) { return Math.round(Math.random() * (max - min) + min); }

function make_popup()
{
	const choice = random_int(0, ads.length - 1);
	const popup = popup_template.cloneNode(true);

	const img = popup.querySelector("img");
	img.src = `img/${ads[choice].file}`;
	img.addEventListener("click", () => {
		if(!window.open(ads[choice].link, "_blank", "popup")) window.open(ads[choice].link, "_blank");
	});

	popup.querySelector("p[type='close']").addEventListener("click", () => popup.remove());
	popup.querySelector("span").innerText = ads[choice].name;

	popup.hidden = false;
	popup.id = "";
	popup.style.top = `${random_int(0, window.innerHeight - 200)}px`;
	popup.style.left = `${random_int(0, window.innerWidth - 200)}px`;
	document.body.appendChild(popup);

	const popup_top = popup.querySelector("div");
	popup_top.addEventListener("mousedown", (e) => {
		const rect = popup_top.getBoundingClientRect();
		let startX = rect.left - e.clientX;
		let startY = rect.bottom - e.clientY;
		popup_top.style.cursor = "grabbing";
		document.body.style.userSelect = "none";
		
		document.addEventListener("mousemove", movingmouse);

		function movingmouse(e) {
			popup.style.left = e.clientX + startX + "px";
			popup.style.top = e.clientY + startY + "px";
		}

		document.addEventListener("mouseup", () => {
			document.removeEventListener("mousemove", movingmouse);
			popup_top.style.cursor = "grab";
			document.body.style.userSelect = "";
		})
	})
}

onload = () => {
	popup_template = document.getElementById("popup_tmp");

	const dots = document.getElementById("dots");
	for(let i = 0; i < blocks.length; i++)
	{
		const dot = dots.appendChild(document.createElement("div"));
		dot.style.borderRadius = "100%";
		dot.style.width = `${size}px`;
		dot.style.height = `${size}px`;
		dot.addEventListener("click", () => location.href = `#${i + 1}`);

		const text = dot.appendChild(document.createElement("a"));
		text.innerHTML = blocks[i];
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

	new IntersectionObserver((entries, observer) => {
		entries.forEach(e2 => {
			const dots = document.getElementById("dots");

			if(e2.intersectionRatio >= 0.05)
			{
				dots.classList.remove("scrolled");
				return;
			}
			else if(e2.intersectionRatio != 0) return;

			dots.classList.add("scrolled");
		});
	}, { threshold: [0.0, 0.05, 0.1] }).observe(document.querySelector("header"));

	setTimeout(function run() {
		make_popup();
		setTimeout(run, random_int(5000, 7000));
	}, random_int(1000, 3000));

	document.getElementById("1").querySelector("img").addEventListener("click", () => {
		location.href = "https://youtu.be/dQw4w9WgXcQ";
	});
}

document.addEventListener('scroll', () => {
	
});

/*function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	document.getElementById("dots").style.width = scrolled + "%";
}*/