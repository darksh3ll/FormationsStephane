const resulat = [];
let totalResulat = 0;
for (let i = 0 ; i < 10 ; i++){
    const chiffres = Math.round(Math.random()*100);
    resulat.push(chiffres)
    }
   for ( let i = 0 ; i < resulat.length ; i++){
       totalResulat += resulat[i];

   }
console.log(resulat);
console.log(totalResulat);