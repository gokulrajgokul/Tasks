function add() {
    var val1 = parseInt(document.getElementById("val1").value);
    var val2 = parseInt(document.getElementById("val2").value);
    document.getElementById("ans").value = val1 + val2;
}

function sub() {
    var val1 = parseInt(document.getElementById("val1").value);
    var val2 = parseInt(document.getElementById("val2").value);
    document.getElementById("ans").value = val1 - val2;
}

function mul() {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    document.getElementById("ans").value = val1 * val2;
}

function div() {
    var val1 = parseFloat(document.getElementById("val1").value);
    var val2 = parseFloat(document.getElementById("val2").value);
    document.getElementById("ans").value = val1 / val2;
}
