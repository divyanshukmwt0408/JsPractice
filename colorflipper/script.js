let flip = document.getElementById("flip")
var colorflip = document.getElementById("colorflipper")


flip.addEventListener("click", () => {
    var R = Math.floor(Math.random() * 256);
var G = Math.floor(Math.random() * 256);
var B = Math.floor(Math.random() * 256);

    colorflip.style.backgroundColor = `rgb(${R}, ${G}, ${B})`

})