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
        }, // Si tu as des variables à faire passer, et dans le php tu les appelles via $_POST[nom de la variable]
        url: "index.php", // lien du php appelé
        success: function() {
            alert('réussi');
        },
        error : function() {
            alert('erreur');
        }
    });
    alert('Votre adresse email a été envoyée')
})

//Lance la fonction verif quand le champ input est sélectionné
document.querySelector("#email1").addEventListener("input", () => {
verif()
})

document.querySelector("#password").addEventListener("input", () => {
    vide()
})

document.querySelector("#password").addEventListener("input", () => {
    vide()
})