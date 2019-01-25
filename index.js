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

document.querySelector("#valide").addEventListener('click', () => {
    alert('Votre adresse email a été envoyée')
    })
    
document.querySelector("#email1").addEventListener("input", () => {
verif()
})

function verif() {
    a = /^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/
    var result = $("#result");
    console.log(a.test(document.querySelector("#email1").value))
    if (a.test(document.querySelector("#email1").value) === true) {
        document.querySelector("#valide").disabled = false;
        result.text("Adresse email valide");
    } else {
        document.querySelector("#valide").disabled = true;
        result.text("Adresse email invalide");
    }
}
