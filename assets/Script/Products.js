let like = () => {
    var btn = document.querySelectorAll(".like-btn");
    var x = false;
    btn.forEach(element => {
        element.addEventListener("click", (i) => {
            if (x == false) {
                i.target.src = "assets/Photos/liked-product.png"
                x = true;
            } else {
                i.target.src = "assets/Photos/like-btn-products.png"
                x = false;
            }
        })
    });
}

like();