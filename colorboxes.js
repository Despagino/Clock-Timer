// let changeColor = () => {
//     let a = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let c = Math.floor(Math.random() * 256);
//     let d = Math.floor(Math.random() * 256);
//     let bgColor = "rgb(" + a + "," + b + "," + c + "," + d + ")"
//     document.getElementById("1").style.background = bgColor;
//     document.getElementById("2").style.background = bgColor;
//     document.getElementById("3").style.background = bgColor;
//     document.getElementById("4").style.background = bgColor;
//     document.getElementById("5").style.background = bgColor;
//     document.getElementById("6").style.background = bgColor;
//     document.getElementById("7").style.background = bgColor;
//     document.getElementById("8").style.background = bgColor;
//     document.getElementById("9").style.background = bgColor;

// }



var colors = ["black", "blue", "red", "green", "maroon", "teal", "gold"];
var currentColor = 0;
var boxes = document.getElementsByClassName("box")
function changeColor() {
    if (currentColor < colors.length) {
        for (var i = 0; i < boxes.length; i++) {
            var changedBox = boxes[i];
            changedBox.style.backgroundColor = colors[currentColor];

        }
        currentColor++
    }

}