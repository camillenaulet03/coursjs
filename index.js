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

$("#bouton").bind("click", popup('light'));
$("#fermer").bind("click", popup('light'));
$("#annuler").bind("click", popup('light'));

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}

function validate() {
    var $result = $("#result");
    var email = $("#email").val();

    if (validateEmail(email)) {
        $result.text(email + " est valide :)");
        $result.css("color", "green");
    } else {
        $result.text(email + " n'est pas valide :(");
        $result.css("color", "red");
    }
    return false;
}

$("#validate").bind("click", validate);
