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
	// 		slidesPerView: 2,
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