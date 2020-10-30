function startup() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", click);
}

window.onload = startup();
function handleStart(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchStart";
}
function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchEnd";
}
function handleCancel(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchCancel";
}
function handleMove(evt) {
    evt.preventDefault();
    document.getElementById('log').innerHTML = "TouchMove";
}
function click(){
    alert('Click');
}