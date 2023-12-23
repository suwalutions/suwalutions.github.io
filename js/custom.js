// back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	} else {
		toTop.classList.remove("active");
	}
})

// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/
let map;

async function initMap() {
	// The location of Suwalutions Co., Ltd.
	const position = { lat: 13.71410175161285, lng: 100.35880454890604 };
	
	// Request needed libraries.
	const { Map } = await google.maps.importLibrary("maps");
	const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

	// The map, centered at Suwalutions
	map = new Map(document.getElementById("googleMap"), {
		zoom: 4,
		center: position,
		mapId: "DEMO_MAP_ID",
	});

	// The marker, positioned at Uluru
	const marker = new AdvancedMarkerElement({
		map: map,
		position: position,
		title: "Suwalutions Co., Ltd.",
	});
}

initMap();

