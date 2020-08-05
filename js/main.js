$("#PopularDealers").owlCarousel({
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        }
    }
});
$("#PopularMake").owlCarousel({
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        },
        1024: {
            items: 5
        }
    }
});
$("#LatestCars").owlCarousel({
    margin: 15,
    loop: true,
    autoplay: true,
    autoplayTimeout:2000,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
});