/*
1 - L'utilisateur choisi entre pierre, feuille ou ciseaux
2 - Afficher le choix de l'utilisateur dans le DOM
3 - Enregistrer le choix de l'utilisateur dans une variable
4 - L'ordinateur fait un choix aléatoire
5 - Afficher le choix de l'ordinateur dans le DOM
6 - Comparer le choix de l'utilisateur et de l'ordinateur
7 - Afficher gangé ou perdu
8 - Donner la possibilité de rejouer
*/
$(document).ready( function(){

//Création de variables pour récupérer des éléments :

/*let element1=pierre;
let element2=feuille;
let element3=ciseaux;*/

	//création (x2) de variables pour stocker le choix de l'utilisateur et le choix de l'ordinateur

	//récupération des images (x3):

	//récupération des articles (pour afficher l'iamge choisi par l'utilisateur et l'ordinateur )(x2):

	//récupération de l'aside (pour afficher le résultat )(x1):
	

	//récupération des liens <a> (pour afficher les boutons jouer ou rejouer )(x2):

//------------------------
//fonction pour afficher l'image choisi par l'utilisateur et donc son choix !



	//Je stock le choix de l'utilisateur

	//$('choix1')

	//j'affiche l'image correspondante dans l'article ('userGame') prévu à cet effet

	//$('aside).show('userGame)

	//On affiche le bouton "Lancer la partie" ('btnPlay')

	//$('btnPlay').show('lancer la partie')

//appel de la fonction :
	
//------------------------
//Déclaration dune fonction 'computerBet' choix aléatoire computer :
	
	//Création d'un tableau avec les 3 choix possibles :

	//on stocke le choix aléatoire de l'ordinateur :
		
	//Affichage de l'image correspondante au choix de l'ordinateur ('computerGame') :

	//masquer le bouton "Lancer la partie" puis afficher le bouton "Rejouer" :

	//Comparaison des variables userChoice et computerChoice :
		//selon le résultat, on l'affiche dans l'<aside> prévu a cet effet

//Lancer la fonction computerBet() au click sur le bouton "Lancer la partie" (btnPlay)


//Rendre fonctionnel le bouton "Rejouer" :

let choix1=userGame;
	let choix2=ordinateur;

var shifoumi = {
    init:function(){
        this.equal = "égalité";
		this.win = "gagné";
		this.lose = "perdu";
		this.txt_equal = "égalité";
		this.txt_win = "You win !";
		this.txt_lose = "You lose.";

        this.my_point = 0;
        this.ia_point = 0;
        this.count = 0;

        $('this').show_result('PFC_result');
        $('this').show_result.innerHTML ('');
        $('this').txt_result ('');

	}
}

$('article').show('choix1')
$('article').show('choix2')

	let img = $('a');

image.attr('src', 'img/' + '.jpg');

$('aside').show('resultat')


$('a').show('lancer la partie')
$('a').show('rejouer')

$('aside').show('userGame')
$('btnPlay').show('lancer la partie')

// quand on clique sur le bouton sa declenche le jeu 
$('btnPlay')('click', function() {
	shifoumi.play(this.value);
    }, false);
  // --------
    $('this').shifoumi.append( btn );
});
console.log('shifoumi')

