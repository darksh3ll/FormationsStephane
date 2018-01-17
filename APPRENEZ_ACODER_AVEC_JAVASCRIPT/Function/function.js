function direBonjour(prenom,nom) {
    let message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

let a = prompt("Entrez votre prénom :");
let f = prompt("Entrez votre nom :");
console.log(direBonjour(a, f));

