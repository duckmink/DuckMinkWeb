let hero_dropdown = () => {
    var btn = document.querySelector(".hero-dropdown-btn");
    var dropdown = document.querySelector(".hero-dropdown-content-box");
    var item = document.querySelectorAll(".hero-dropdown-item");
    btn.addEventListener("click", () => {
        dropdown.classList.toggle("hide")
        item.forEach(element => {
            element.addEventListener("click", () => {
                console.log(element);
                btn.innerHTML = element.innerHTML + `<img src="assets/Photos/hero_drop_down_arrow.png">`;
                dropdown.classList.add("hide")
            })
        });
    })
}

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        center: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
});

hero_dropdown();