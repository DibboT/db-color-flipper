const handleColorChange = () => {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let color = 'rgb(' + a + ',' + b + ',' + c + ')';
    document.getElementById('colorflipper').style.backgroundColor = color;
}