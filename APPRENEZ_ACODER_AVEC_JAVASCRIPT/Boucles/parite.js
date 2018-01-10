const saisieUtilisateur = prompt("Saisir un chiffres");
if (saisieUtilisateur >= 1) {
for ( let i = 1; i <= saisieUtilisateur; i++ ) {
    if (i % 2 === 0) {
        console.log(`${i} est pair`)
    }else {
        console.log(`${i} est impair`);
    }
}
}else {
    console.log(`le chiffres doit etres superieur a 0 pour eviter une boucle infinies`);
}