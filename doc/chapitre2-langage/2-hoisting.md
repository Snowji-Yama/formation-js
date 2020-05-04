## Le langage et ses concepts

### L'hoisting

L'**hoisting**, dit le **"hissage"** en français, est un des concepts permettant de décrire une des phases 
de la compilation du Javascript (plutôt la phase de création des instructions puis de leur 
exécution).

Pendant la première phase de compilation, Javascript en lisant une première fois les fichiers, 
met en mémoire toutes les déclarations trouvées (variables et fonction) : ce sont les **défitions**.  
Par la suite, avec une deuxième lecture, JS jouera les executions trouvées comme les appels de 
fonctions ou encore les assignations de valeurs : ce sont les **expressions**.

L'Hoisting peut paraître perturbant au début, mais pour résumer, celà simule le fait de "remonter" 
les définitions avant les expressions. Donc peut importe dans quel ordre le code sera écrit.
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
// f2() // échoue, typed error 
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
est appelée, l'exécution connaitra la définition qui sera en mémoire. 

cas ``f2`` : ici la subtilité est que f2 est une variable ayant comme valeur la référence d'une 
fonction anonyme. Ce que la compilation va donc mettre en mémoire en premier est la déclaration 
de la variable. C'est pourquoi le premier console.log va fonctionner mais vaudra undefined au 
moment de l'exécution. Par la suite, l'expression sur f2 va se jouer (donc assigner la fonction) 
et l'execution en bas de code cette fois-ci fonctionnera correctement.

cas ``f3`` : pas de doute dans ce cas, il n'y a aucune définition pour la fonction f3, donc une 
expression ne peut être possible.

<br>

Dernier exemple :
```js
nbAvecLetDansGlobal = 4

function test() {
  nbSansVar = 1 // expression
  nbAvecVar = 2
  nbAvecLet = 3
  var nbAvecVar // définition
  // let nbAvecLet // échoue, reference error
  let nbAvecLetDansGlobal
  console.log(nbAvecLetDansGlobal) // fonctionne mais undefined, nouvelle référence créée
}

test()
console.log(nbSansVar) // fonctionne
// console.log(nbAvecVar) // échoue, reference error
// console.log(nbAvecLet) // échoue, reference error
console.log(nbAvecLetDansGlobal) // fonctionne
```

?


<br>
<br>

---

Pour voir et utiliser le script entier : [rendez vous ici](/dist/chapitre2-langage/hoisting.js)

Source : 

[MDN Hoisting](https://developer.mozilla.org/fr/docs/Glossaire/Hoisting)