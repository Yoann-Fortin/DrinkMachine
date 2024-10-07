// La machine propose :
// "thé ou café ?"
// "sucre ?"
// "lait ?"
// Si oui, "végétal ?"
// La machine récapitule la commande et demande confirmation. Un exemple de commande : "café, sans sucre, lait de vache".
// Tant que la demande n'est pas confirmée, le programme recommence.

/*
1 Écrire une fonction -> ok
2 Demander thé ou café
3 Demander sucre ou sans sucre
4 Idem pour le lait, si oui végétal ou non
5 Récapituler la commande
6 Voir si conformation ok sinon on recommence
*/

function drinkMachine() {
  let isConfirm = false;
  while (isConfirm === false) {
    let order = "";
    let drink = prompt("Voulez vous du thé (1) ou du café (2) ? Choisissez l'une des deux options");
    while (drink !== "1" && drink !== "2") {
      drink = prompt("Je n'ai pas compris votre demande. Voulez vous du thé (1) ou du café (2) ? Choisissez l'une des deux options");
    }
    if (drink === "1") {
      // order = order + "Thé, "
      order += "Thé, ";
    } else {
      order += "Café, ";
    }
    let sugar = prompt("Voulez vous avec du sucre (1) ou sans sucre(2) ? Choisissez l'une des deux options");
    while (sugar !== "1" && sugar !== "2") {
      sugar = prompt("Je n'ai pas compris votre demande. Voulez vous avec du sucre (1) ou sans sucre(2) ? Choisissez l'une des deux options");
    }
    if (sugar === "1") {
      order += "avec du sucre, ";
    } else {
      order += "sans sucre, ";
    }
    let milk = prompt("Voulez vous avec du lait (1) ou sans lait (2) ? Choisissez l'une des deux options");
    while (milk !== "1" && milk !== "2") {
      milk = prompt("Je n'ai pas compris votre demande. Voulez vous avec du lait (1) ou sans lait (2) ? Choisissez l'une des deux options");
    }
    if (milk === "1") {
      let vegetal = prompt("Voulez vous avec du lait végétal (1) ou avec du lait de vache (2) ? Choisissez l'une des deux options");
      while (vegetal !== "1" && vegetal !== "2") {
        vegetal = prompt("Je n'ai pas compris votre demande. Voulez vous avec du lait végétal (1) ou avec du lait de vache (2) ? Choisissez l'une des deux options");
      }
      if (vegetal === "1") {
        order += "avec du lait végétal.";
      } else {
        order += "avec du lait de vache";
      }
    } else {
      order += "sans lait.";
    }
    // biome-ignore lint/style/useTemplate: <explanation>
    isConfirm = confirm("Voici votre commande: " + order + " Souhaitez-vous confirmer cette commande ?");
  }
}

drinkMachine();
