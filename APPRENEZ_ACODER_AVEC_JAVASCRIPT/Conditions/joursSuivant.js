//Affiche le jour suivant

const jours = "dimanche";

switch (jours) {
    case "lundi":
        console.log("Demain on seras mardi");
        break;
    case "mardi":
        console.log("Demain on seras mercredi");
        break;
    case "mercredi":
        console.log("Demain on seras jeudi");
        break;
    case "jeudi":
        console.log("Demain on seras vendredi");
        break;
    case "vendredi":
        console.log("Demain on seras samedi");
        break;
    case "samedi":
        console.log("Demain on seras dimanche");
        break;
    case "dimanche":
        console.log("demain on seras lundi");
        break;
    default:
        console.log("JOURS INCORECT")
}
