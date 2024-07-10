// fonction estPalindrome(chaine)
//     // Supprimer les espaces et mettre en minuscules
//     chaine = chaine.replace(/\s/g, "").toLowerCase();
//     retourner verifierPalindrome(chaine, 0, chaine.length - 1)
// fin fonction

// fonction verifierPalindrome(chaine, debut, fin)
//     si (debut >= fin) alors
//         retourner vrai
//     sinon si (chaine[debut] !== chaine[fin]) alors
//         retourner faux
//     sinon
//         retourner verifierPalindrome(chaine, debut + 1, fin - 1)
//     fin si
// fin fonction

function estPalindrome(chaine) {
    // Supprimer les espaces et mettre en minuscules
    chaine = chaine.replace(/\s/g, "").toLowerCase();
    return verifierPalindrome(chaine, 0, chaine.length - 1);
}

function verifierPalindrome(chaine, debut, fin) {
    if (debut >= fin) {
        return true;
    } else if (chaine[debut] !== chaine[fin]) {
        return false;
    } else {
        return verifierPalindrome(chaine, debut + 1, fin - 1);
    }
}

// Exemple d'utilisation
let mot = "Engage le jeu que je le gagne";
console.log(`"${mot}" est un palindrome ? ${estPalindrome(mot)}`); // Output: true
