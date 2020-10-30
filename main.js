function startup() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", click);

    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", orientacion(event));
   }
}

window.onload = startup;

function handleStart(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchStart " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}
function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchEnd " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}
function handleCancel(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchCancel " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}
function handleMove(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchMove " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}
function click(){
    alert('Click');
}

function orientacion(evt){
    document.getElementById('logOr').innerHTML = "Alpha: " + evt.alpha + " Beta: "  + evt.beta + " Gamma: " + evt.gamma ;

}