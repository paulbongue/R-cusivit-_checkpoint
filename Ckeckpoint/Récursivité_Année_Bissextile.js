// fonction estAnneeBissextile(annee)
//     si (annee % 4 == 0) alors
//         si (annee % 100 == 0) alors
//             si (annee % 400 == 0) alors
//                 retourner Vrai
//             sinon
//                 retourner Faux
//             fin si
//         sinon
//             retourner Vrai
//         fin si
//     sinon
//         retourner Faux
//     fin si
// fin fonction

function estAnneeBissextile(annee) {
    if (annee % 4 === 0) {
        if (annee % 100 === 0) {
            if (annee % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

let annee = 2024;
console.log(estAnneeBissextile(annee)); 
