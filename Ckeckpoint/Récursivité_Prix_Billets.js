// fonction prixDuBillet(age)
//     si (age <= 12) alors
//         retourner 10
//     sinon si (age >= 13 && age <= 17) alors
//         retourner 15
//     sinon
//         retourner 20
//     fin si
// fin fonction

function prixDuBillet(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Exemple d'utilisation
let age = 15;
console.log("Prix du billet pour " + age + " ans : $" + prixDuBillet(age));
