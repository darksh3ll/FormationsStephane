const resulat = [];
for (i = 0 ; i < 10 ; i++) {
    const chiffre = Math.round(Math.random()*19);
    
    if (chiffre[i] != resultat) {
        resulat.push chiffre[i]
    }
    
}
console.log(resultat);