function show_making_cup_of_tea() {
    document.getElementById('making_cup_of_tea').style.visibility = "visible";
    document.getElementById('brushing_teeth').style.visibility = "hidden";
    document.getElementById('making_sandwich').style.visibility = "hidden";
    document.getElementById('washing_up').style.visibility = "hidden";
}

function show_brushing_teeth() {
    document.getElementById('making_cup_of_tea').style.visibility = "hidden";
    document.getElementById('brushing_teeth').style.visibility = "visible";
    document.getElementById('making_sandwich').style.visibility = "hidden";
    document.getElementById('washing_up').style.visibility = "hidden";
}

function show_making_sandwich() {
    document.getElementById('making_cup_of_tea').style.visibility = "hidden";
    document.getElementById('brushing_teeth').style.visibility = "hidden";
    document.getElementById('making_sandwich').style.visibility = "visible";
    document.getElementById('washing_up').style.visibility = "hidden";
}

function show_washing_up() {
    document.getElementById('making_cup_of_tea').style.visibility = "hidden";
    document.getElementById('brushing_teeth').style.visibility = "hidden";
    document.getElementById('making_sandwich').style.visibility = "hidden";
    document.getElementById('washing_up').style.visibility = "visible";
}