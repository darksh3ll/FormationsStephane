let num = 0 ; //Valeurs permetant de rentrer dans le boucles
while ((num < 2) || (num > 9)) {
    num = Number(prompt("Entrez un nombres entre 2 et 9 "))
}
let i = 1 ;
while (i < 10) {
    console.log(`${num} x ${i}`);
i++
}

