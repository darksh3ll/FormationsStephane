const saisieUtilisateur = prompt("Entrez un nombres");
if (saisieUtilisateur >=0) {
    for (let i = 1; i <=saisieUtilisateur; i++ ) {
        console.log(`C'est le tours numéro ${i}`);
    }
}else {
    alert("le chiffres doit etres supérieur a 0 pour eviter une boucle infinie")
}
