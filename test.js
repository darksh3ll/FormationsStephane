/*
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
console.log("Resultat du tableau = " +totalResulat);*/

const sujet = ["stephanie","stephane","stan","ayrton"];
const verbe = ["mange","saute","tire","suce","attaque"];
const compl = ["une couilles","un mec","une fille"," un exta terrestre"];

function aleatoire(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
console.log(aleatoire(sujet) + " " + aleatoire(verbe) + " " + " " + aleatoire(compl));

