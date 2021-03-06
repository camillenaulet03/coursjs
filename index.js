function popup (identifiant) {
    var temp = identifiant;
    if (document.getElementById(temp).style.display === "block") {//Donc le bloc est affiché, on le masque
        document.getElementById(temp).style.display = "none";
        document.getElementById('fade').style.display = "none";
    } else {//Donc le bloc est masqué, on l'affiche
        document.getElementById(temp).style.display = "block";
        document.getElementById('fade').style.display = "block";
    }
}

function verif() {
    a = /^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/  //Vérifie que l'adresse mail est valide
    var result = $("#result");
    console.log(a.test(document.querySelector("#email1").value))
    if (a.test(document.querySelector("#email1").value) === true) { //adresse mail valide
        document.querySelector("#valide").disabled = false; //bouton valide cliquable
        result.text("Adresse email valide");
    } else {                                                           //adresse mail non valide
        document.querySelector("#valide").disabled = true;  //bouton valide non cliquable
        result.text("Adresse email invalide");
    }
}

function vide() {
    if ($("#password").val() == "") {
        $("#password").css("border", "2px solid red");
        document.querySelector("#valide").disabled = true;
    } else {
        $("#password").css("border", "2px solid green");
        document.querySelector("#valide").disabled = false;
    }
}

//Lance la fonction popup quand on clique sur les boutons
document.querySelector('#bouton').addEventListener('click', (event) => {
    popup('light')
})
document.querySelector('#annuler').addEventListener('click', (event) => {
    popup('light')
})
document.querySelector('#fermer').addEventListener('click', (event) => {
    popup('light')
})

document.querySelector("#myForm").addEventListener('submit', (event) => {
    event.preventDefault()
    $.ajax({
        type: 'POST',
        data: {
            email1: document.querySelector("#email1").value,
            password: document.querySelector("#password").value
        },
        success: function() {
            alert('Votre formulaire a été envoyé');
        },
        error : function() {
            alert('erreur');
        }
    });
})

document.querySelector("#password").addEventListener("input", () => {
    vide()
})

//Lance la fonction verif quand le champ input est sélectionné
document.querySelector("#email1").addEventListener("input", () => {
verif()
})