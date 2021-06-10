function getParagraph1(){
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("input_box_" + i).value);
        inputs.join(". ");
        document.getElementById("showParagraph").innerHTML = inputs.join(". ");
    }
   
}
function getParagraph2(){
    var inputs2 = [];
    for (var y = 1; y <= 6; y++) {
        inputs2.push(document.getElementById("input_boxx_" + y).value);
        inputs2.join(". ");
        document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
    }
   
}