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



//function validate() {
//  var $result = $("#result");
//  var email = $("#email").val();

//  if (validateEmail(email)) {
//      $result.text(email + " est valide :)");
//      $result.css("color", "green");
//  } else {
//      $result.text(email + " n'est pas valide :(");
//      $result.css("color", "red");
//  }
//  return false;
//}

function showHint(str) {
    var xhttp;
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "gethint.php?q="+str, true);
    xhttp.send();
}

//$("#validate").bind("click", validate);