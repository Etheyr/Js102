//creer une calculatrice
//etape 1 prendre 2 chiffe et les additioner 
//recuperer les argument en ligne de commande
//donner les argument a la fonction add
function add(a,b) {
	var resultat = a/b;
	console.log(resultat);
}
process.argv [2];
process.argv [3];
var argument1 = process.argv[2];
var argument2 = process.argv[3];
add(argument1,argument2);
//transformer arg 1 et 2 en chiffre
Number(argument1)
Number(argument2)
add(Number(argument1), Number(argument2));