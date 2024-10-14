const paysages = ["./assets/IMG/volcan.jpg","./assets/IMG/montagne.jpg","./assets/IMG/nature.jpg"];

let nature = 0;
function movePaysages(sens) {
nature = nature + sens;

if(nature < 0){
nature = paysages.length -1;
}
else if(nature > paysages.length -1) {
nature = 0;
}
document.getElementById("img_paysages").src = paysages[nature];
}

setInterval(function() {
movePaysages(1);
},  3000);