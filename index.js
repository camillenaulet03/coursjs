function popup (identifiant) {
    var temp = identifiant;
    //alert('1');
    if (document.getElementById(temp).style.display === "block") {//Donc le bloc est affiché, on le masque
        document.getElementById(temp).style.display = "none";
        //alert('2');
        document.getElementById('fade').style.display = "none";
        //alert('3');
    } else {//Donc le bloc est masqué, on l'affiche
        document.getElementById(temp).style.display = "block";
        //alert('4');
        document.getElementById('fade').style.display = "block";
        //alert('5');
    }
}

document.querySelector('#bouton').addEventListener('click', (event) => {
    popup('light')
})
document.querySelector('#annuler').addEventListener('click', (event) => {
    popup('light')
})
document.querySelector('#fermer').addEventListener('click', (event) => {
    popup('light')
})



function checkForm() {
// Fetching values from all input fields and storing them in variables.
    var email = document.getElementById("email1").value;
//Check input Fields Should not be blanks.
    if (email == '' ) {
        alert("Fill All Fields");
    } else {
//Notifying error fields
        var email1 = document.getElementById("email");
//Check All Values/Informations Filled by User are Valid Or Not.If All Fields Are invalid Then Generate alert.
        if (email1.innerHTML == 'Invalid email') {
            alert("Fill Valid Information");
        } else {
//Submit Form When All values are valid.
            document.getElementById("myForm").submit();
        }
    }
}

$("#valide").bind("click", checkForm);

// AJAX code to check input field values when onblur event triggerd.
function validate(field, query) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState != 4 && xmlhttp.status == 200) {
            document.getElementById(field).innerHTML = "Validating..";
        } else if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(field).innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById(field).innerHTML = "Error Occurred. <a href='index.php'>Reload Or Try Again</a> the page.";
        }
    }
    xmlhttp.open("GET", "validation.php?field=" + field + "&query=" + query, false);
    xmlhttp.send();
}