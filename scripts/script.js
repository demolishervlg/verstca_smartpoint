//
const swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn",
	},
	grabCursor: true,
	slidesPerView: 'auto',
	spaceBetween: 40,
	// loop: true,
	// breakpoints: {
	// 	// when window width is >= 320px
	// 	320: {
	// 		slidesPerView: 1,
	// 		spaceBetween: 20,
	// 	},
	// 	// when window width is >= 480px
	// 	480: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 30,
	// 	},
	// 	// when window width is >= 640px
	// 	640: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	},
	// },
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("sub_content__header").classList.toggle("hidden");
	document.getElementById("dropbtn").classList.toggle("active");
	document.getElementById("mfp-bg").classList.toggle("mfp-bg");
}