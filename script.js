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
    order += prepareOrder("du thé", "du café", "Thé ", "Café ");
   
   order += prepareOrder("du sucre", "sans sucre", "avec du sucre, ", "sans sucre, ");
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
   // order += prepareOrder("avec du lait", "sans lait", prepareOrder(" avec du lait végétal", "avec du lait de vache", " avec du lait végétal.", " avec du lait de vache"), "sans lait.")
    // biome-ignore lint/style/useTemplate: <explanation>
    isConfirm = confirm("Voici votre commande: " + order + " Souhaitez-vous confirmer cette commande ?");
  }
}

drinkMachine();

function prepareOrder(firstOption, secondOption, firstChoice, secondChoice) {
   let composition = prompt("Voulez vous " + firstOption + " (1) ou " + secondOption + " (2) ? Choisissez l'une des deux options");
   while (composition !== "1" && composition !== "2") {
      composition = prompt("Je n'ai pas compris votre demande. Voulez vous " + firstOption + " (1) ou " + secondOption + " (2) ? Choisissez l'une des deux options");
   }
   if (composition === "1") {
      console.log(firstOption, composition);
      
      return firstChoice;
   }
   return secondChoice;
}

