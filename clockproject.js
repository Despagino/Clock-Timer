var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
let color = "red";

function startTime() {
    setInterval(setTime, 1000);
    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }
    if (totalSeconds === 3600) {
        document.getElementsByClassName("time").style.background = color;
        clearTimeout(setTime())
    }
}
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}