const handleColorChange = () => {
    let a = Math.random() * 258;
    let b = Math.random() * 258;
    let c = Math.random() * 258;
    let color = "rgb(" + a + "," + b + "," + c + ")";
    console.log(color)
    document.getElementById("colorflipper").style.backgroundColor = color;
};