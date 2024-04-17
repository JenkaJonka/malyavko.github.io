f1.onchange = function () {
    let first = document.getElementById("f1").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true 
        document.getElementById("f1").style.backgroundColor = "green";
        return true;
    }
    else {
        document.getElementById("f1").style.backgroundColor = "red";
        return false;
    }
}

f2.onchange = function () {
    let second = document.getElementById("f2").value;
    let regex = /^\d{2}([./-])\d{2}\1\d{4}$/
        ;

    if (regex.test(second)) { // if testing of first is true 
        document.getElementById("f2").style.backgroundColor = "green";
        return true;
    }
    else {
        document.getElementById("f2").style.backgroundColor = "red";
        document.getElementById("error").innerHTML = "Некорректно введена дата рождения!";
        return false;
    }
}

f3.onchange = function () {
    let third = document.getElementById("f3").value;
    let regex = /^\d+$/

    if (regex.test(third)) { // if testing of first is true 
        document.getElementById("f3").style.backgroundColor = "green";
        return true;
    }
    else {
        document.getElementById("f3").style.backgroundColor = "red";
        return false;
    }
}

f4.onchange = function() {
    let four = document.getElementById("f4").value;
    let regex = /^(https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (regex.test(four)) { // if testing of first is true 
        document.getElementById("f4").style.backgroundColor = "green";
        return true;
    }
    else {
        document.getElementById("f4").style.backgroundColor = "red";
        document.getElementById("invalid").innerHTML = "Формат ссылки: https://...!";
        return false;
    }
}


function allTrue(func1, func2, func3, func4) {
    if (func1() && func2() && func3() && func4()) {
        return true;
    }
    else {
        return false;
    }
}
function send() {
    if (!allTrue(f1.onchange, f2.onchange, f3.onchange, f4.onchange)) {
        document.getElementById("bch").disabled = true;
        setTimeout(function () { document.getElementById("bch").disabled = false; }, 2000); return false;
    } else {
        return true;
    }
}


