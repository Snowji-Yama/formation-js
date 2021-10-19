## Le langage et ses concepts

### L'hoisting

L'**hoisting**, dit le **"hissage"** en français, est un des concepts permettant de décrire une des phases 
de l'interprétation du Javascript (plutôt la phase de création des instructions puis de leur 
exécution).

Pendant la première phase d'interprétation, le moteur Javascript va lire les fichiers pour séparer 
les déclarations et des exécutions. Il va donc mettre en mémoire premièrement toutes les déclarations 
trouvées (déclaration de variables et déclaration de fonctions) : c'est ce qu'on appelle les **défitions**.  
Par la suite, le moteur JS jouera les executions trouvées comme les appels de 
fonctions ou encore les assignations de valeurs : ce sont les **expressions**.

L'Hoisting peut paraître perturbant au début, mais pour résumer, celà simule le fait de "remonter" 
les définitions avant les expressions, donc peut importe dans quel ordre le code sera écrit.
Pour éclaicir le concept, voici un exemple tout simple :

```js 
// Exemple 1
foo() // expression
function foo() { // définition
  console.log('foo')
}

// Exemple 2
function bar() { // définition
  console.log('bar')
}
bar() // expression
```

L'exemple 1 va aussi bien marcher que le 2, même si l'appel de ``foo`` a bien été écrit avant sa 
déclaration car l'hoisting a permis à la compilation du JS de mettre en mémoire la définition de 
la fonction avant son exécution.


---
#### Pour aller un peu plus loin

Voici un exemple un peu similaire avec un peu plus de subtilité :

```js
f1() // expression, fonctionne
// f2() // échoue, type error 
console.log(f2) // fonctionne mais vaut undefined

function f1() { // définition
  console.log('f1')
}

var f2 = function() { // définition et expression
  console.log('f2')
}

f1() // fonctionne
f2() // fonctionne
// f3() // échoue, reference error
```

cas ``f1`` : tout fonctionne parfaitement pour la fonction f1 car sa définition va se faire 
simplement en premier pendant la phase de compilation, et donc peut importe l'endroit où elle 
est appelée, l'exécution connaitra la définition qui sera en mémoire. Elle subit donc ce qu'on appelle 
l'hoisting.

cas ``f2`` : ici la subtilité est que f2 est une variable ayant comme valeur la référence d'une 
fonction anonyme. Ce que la compilation va donc mettre en mémoire en premier est la déclaration 
de la variable. C'est pourquoi le premier console.log va fonctionner mais vaudra undefined au 
moment de l'exécution, et c'est aussi pourquoi le premier appel de f2 échoue (type error : la référence 
existe mais valant undefined et non une fonction, aucune exécution n'est possible). 
Par la suite, l'expression sur f2 va se jouer (donc assigner la fonction) 
et l'execution en bas de code cette fois-ci fonctionnera correctement.

cas ``f3`` : pas de doute dans ce cas, il n'y a aucune définition pour la fonction f3, donc un 
appel de la fonction ne peut être possible (reference error : aucune référence pour cette fonction n'existe).

<br>

Dernier exemple :
```js
nbAvecLetDansGlobal = 4

function test() {
  nbSansVar = 1 // expression

  nbAvecVar = 2 // expression
  var nbAvecVar // définition

  // nbAvecLet = 3
  // let nbAvecLet // échoue, reference error car let/const ne sont pas hoist

  let nbAvecLetDansGlobal
  console.log(nbAvecLetDansGlobal) // fonctionne mais undefined, nouvelle référence créée (masquage)
}

test()
console.log(nbSansVar) // fonctionne, declaration implicite donc global scope
// console.log(nbAvecVar) // échoue, reference error , declaration explicite donc fonction scope (hoist)
console.log(nbAvecLetDansGlobal) // fonctionne
```

cas ``nbSansVar`` : Pour rappel, une variable déclarée implicitement est 
automatiquement rattachée au scope global.  
Le console.log de cette variable va fonctionner car l'expression `nbSansVar = 1` dans la fonction `test` 
déclenche une déclaration implicite, ce qui permet à la variable d'exister et donc d'être utiliser après
l'exécution de la fonction test.

cas ``nbAvecLetDansGlobal`` : La variable est là aussi déclarée de manière implicite. Il est donc possible 
d'utiliser cette variable sans problème comme on peut le voir après l'appel de la fonction test.
Toutefois, on peut observer que si un masquage est opéré (comme dans la fonction test), une nouvelle 
référence est créée et c'est pour celà que le console.log dans test vaut undefined.

cas ``nbAvecVar`` : Pour ce cas là, l'hoisting est bien effectué dans la fonction test. La définition 
`var nbAvecVar` va être mise en mémoire avant son expression `nbAvecVar = 2` qui est pourtant écrite avant. 
Celà permet donc de pouvoir utiliser sans soucis cette variable dans la fontion test. Le mot clé **var** est 
bien "hoist". 
Pour autant, console.log cette variable hors de la fonction échoue, car l'hoisting étant effectué, le scope 
de la variable est bien celui de la fonction seulement.

cas ``nbAvecLet`` : Ici, la différence avec le cas précédent est que le mot clé utilisé est **let**, qui 
quant a lui ne subit pas le hoisting (tout comme const). Il est donc impossible d'utiliser une expression 
comme ``nbAvecLet = 3`` avant sa déclaration.

<br>
<br>

Pour conclure, tout comme en lien avec la portée des variables, attention à leur sens de 
définition / expression

TIPS :

- eviter d'exploiter l'hoisting, écrire les déclarations avant les expressions

<br>
<br>

---
Suite : [Les closures](../chapitre2-langage/3-closure.md)

---
<br>

Pour voir et utiliser le script entier :  
[exemple 1](/dist/chapitre2-langage/hoisting/hoisting-exemple-1.js)  
[exemple 2](/dist/chapitre2-langage/hoisting/hoisting-exemple-2.js)

Source : 

[MDN Hoisting](https://developer.mozilla.org/fr/docs/Glossaire/Hoisting)
