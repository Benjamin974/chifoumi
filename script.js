let Afficheur = function(element) {
    function setText(message) { 
        element.innerHTML = message; 
    }
    return {sendMessage : setText};
}

let monScore = 0;
let ordiScore = 0;
let afficheur = new Afficheur(document.querySelector("#statut-jeu"));

function comparaison(choixOrdi, choixMoi) {

    if(choixMoi == choixOrdi) {
        afficheur.sendMessage("Il y a égalité. l'ordinateur a choisi " + choixOrdi);
    }
    else if((choixMoi == "pierre" && choixOrdi == "ciseaux") || (choixMoi == "feuille" && choixOrdi == "pierre") || (choixMoi == "ciseaux" && choixOrdi == "feuille")) {
        afficheur.sendMessage("Tu gagne. L'ordinateur à choisi " + choixOrdi); 
        monScore++;             // LA FONCTION QUI PERMET DE DETERMINER LES CHOIX DE CHACUN
    }
    else if((choixMoi == "pierre" && choixOrdi == "feuille") || (choixMoi == "ciseaux" && choixOrdi == "pierre") || (choixMoi == "feuille" && choixOrdi == "ciseaux")) {
        afficheur.sendMessage("Tu perd. L'ordinateur à choisi " + choixOrdi);
        ordiScore++;
    }

}

function vraiChoixOrdi() {
    let choixOrdinateur = Math.floor(Math.random()*50);

        if(choixOrdinateur < 20) {
            choixOrdinateur = "pierre";
        } else if(choixOrdinateur > 20 && choixOrdinateur < 40) {    // LA FONCTION POUR QUE L'ORDINATEUR AFFICHE SON NOMBRE ALEATOIRE PAR UNE CHAINE DE CARACTERE
            choixOrdinateur = "feuille";
        } else if(choixOrdinateur > 40) {
            choixOrdinateur = "ciseaux";
        }
        return choixOrdinateur;
}

function vraiChoixUti(choixOrdi) {
    if(choixOrdi == "pierre") {
        choixOrdi = "pierre";
    } else if(choixOrdi == "feuille") { 
        choixOrdi = "feuille";
    } else if(choixOrdi == "ciseaux") {
        choixOrdi = "ciseaux";
    }
    return choixOrdi;
}


function liaison() {
    let notreChoix = document.querySelectorAll("#lejeu button");
    let finDuJeu = 0;

    for(let i = 0, taille = notreChoix.length; i < taille; i++) {
        afficheur.sendMessage("le jeu peut commencer. choisissez un objet");

        notreChoix[i].addEventListener("click", function() {

            dernierChoixMoi = this.id; 
            let mOnchoix = vraiChoixUti(dernierChoixMoi);
            let oRdichoix = vraiChoixOrdi();
            comparaison(mOnchoix, oRdichoix);

            finDuJeu++;

            if(finDuJeu >=4){
                afficheur.sendMessage("le jeu est fini, ordi :" + ordiScore + " Joueur :" + monScore);
                return;
            }
        });
    }
}

liaison();
