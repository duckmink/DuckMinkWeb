let timeline = () => {
    const pad = document.querySelector(".timeline-bg");
    const i = pad.offsetHeight;
    var measure = document.querySelector(".box7").offsetHeight;
    var a = i + measure;
    pad.style["height"] = `${a}px`;
    window.addEventListener("resize", () => {
        var measure = document.querySelector(".box7").offsetHeight;
        var a = i + measure;
        pad.style["height"] = `${a}px`;

    })
}

timeline();