let mobile_navbar = () => {
    var btn = document.querySelector(".external-menu-btn");
    var dropdown = document.querySelector("#external-menu-dropdown")
    btn.addEventListener("click", () => {
        dropdown.classList.toggle("dropdown-external-menu-animation");
    })
}

let back_top = () => {
    var btn = document.querySelector("#backtop-btn");
    var head = document.querySelector("#header");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset >= 200) {
            btn.classList.remove("hide");
            head.classList.add("fixed");
        } else {
            btn.classList.add("hide");
            head.classList.remove("fixed");
        }
    })
    btn.addEventListener("click", () => {
        head.classList.remove("fixed");
    })
}

let counter = () => {
    let item1 = document.querySelectorAll(".hero-counter-number");
    let s1 = 300;
    item1.forEach(e => {
        let update = () => {
            let data = Number(e.getAttribute("data"));
            let count = +e.innerText;
            var result = data / s1;
            var a, b;
            if (count < data) {
                a = Number(result + count);
                b = Number(a.toFixed(0));
                e.innerText = b;
                setTimeout(update, 3)
            } else {
                e.innerText = data.toLocaleString('en-US', {});
            }
        }
        update();
    });
    let item2 = document.querySelectorAll(".hero-counter-currency");
    let s2 = 300;
    item2.forEach(e => {
        let update = () => {
            let data = Number(e.getAttribute("data"));
            let count = +e.innerText;
            var result = data / s2;
            var a, b;
            if (count < data) {
                a = Number(result + count);
                b = Number(a.toFixed(0));
                e.innerText = b;
                setTimeout(update, 3)
            } else {
                e.innerText = data.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                });
            }
        }
        update();
    });
}

mobile_navbar();
back_top();
counter();