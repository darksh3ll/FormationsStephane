//prend 10 chiffres u hasard grace a la boucle et  place dans un tableau
// ensuite aditionne la somme du tableau

const resulat = [];
let totalResulat = 0;
//Boucles qui prend 10 chiffres au hasard
for (let i = 0 ; i < 10 ; i++){
    const chiffres = Math.round(Math.random()*100);
    resulat.push(chiffres)
    }
   for ( let i = 0 ; i < resulat.length ; i++){
       totalResulat += resulat[i];

   }
console.log(resulat);
console.log("Resultat du tableau = " +totalResulat);