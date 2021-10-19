## Le langage et ses concepts

### Le scope

Une des notions importantes en Javascript est **le scope**.  
Le scope est la __portée des variables__. Cela signifie que suivant l'endroit où une variable est déclarée, 
son accessibilité (donc sa portée) va changer.
Illustration simple, si une variable est déclarée dans une fonction, elle ne sera accessible que dans 
celle-ci.

Il va donc y avoir 2 types de variables : **globales** et **locales**.

---

#### Les variables locales

Une variable sera dite locale car elle ne sera accessible seulement dans la fonction ou dans le 
code bloc (caractère "{}") dans lequel elle sera déclarée.  
Voici un exemple pour illustrer les propos :

```js
function testScope () {
  var scopeDansFonction = 'scopeDansFonction' // accessible seulement dans cette fonction
  console.log(scopeDansFonction) // fonctionne
}

// console.log(scopeDansFonction) // echoue, reference error
```

Comme annoncé, on observe bien que la variable `scopeDansFonction` est bien accessible dans la fonction 
où elle a été déclarée. Si l'on essaye d'avoir accès à cette variable en dehors, l'erreur 
**Reference Error** est déclenchée.

<br>

Pour aller un peu plus loin, il faut se tourner sur le mot clé utilisé pour déclarer une variable. 
Dans l'exemple ci-dessus, le mot clé utilisé a été `var`. Il possède une particularité, il scope 
la variable à la fonction automatiquement, ignorant donc tout autre code block.  
Depuis ES6 (EmcaScript 2015), var est délaissé (fort conseil de ne plus l'utiliser) 
pour laisser la place au **let** et **const**. La portée de ces deux mots clé quand à eux est bien 
définie par les code block.

En voici l'illustration : 

```js
function testScope () {
  if (true) {
    var scopeDansBlockCode = 'scopeDansBlockCode'
    let scopeDansBlockCodeAvecLet = 'scopeDansBlockCodeAvecLet'
    console.log(scopeDansBlockCode) // fonctionne
    console.log(scopeDansBlockCodeAvecLet) // fonctionne
  }
  console.log(scopeDansBlockCode) // fonctionne car on utilise "var" (scope de la fonction)
  // console.log(scopeDansBlockCodeAvecLet) // echoue, reference error (scope du block)

  /*
   Comme le cas précédent
  {
    var scopeDansBlockCodeVide = 'scopeDansBlockCodeVide'
    let scopeDansBlockCodeVideAvecLet = 'scopeDansBlockCodeVideAvecLet'
  }
  */
}
```

On observe bien que `scopeDansBlockCode` est accessible en dehors du **if** car cette variable 
a été déclarée avec var (donc accessible dans toute la fonction), tandis que `scopeDansBlockCodeAvecLet` est bien accessible dans le if mais 
génère une erreur en dehors de celui-ci (accessible seulement dans le code block du if).

<br>

#### Les variables globales

Une variable sera dite globale car elle sera déclarée "en dehors d'une fonction" comme par exemple tout 
en haut d'un script. Elle sera donc accessible dans tout le script suivant sa déclaration.

Voici un exemple :

```js
var scopeAuGlobal // accessible dans le scope global

function testScope () {
  scopeAuGlobal = 'scopeAuGlobal' //accessible et modifiable
  scopeAuGlobalImplicite = 'scopeAuGlobalImplicite'
}

console.log(scopeAuGlobal) // fonctionne mais vaut undefined
// console.log(scopeAuGlobalImplicite) // echoue, reference error
testScope()
console.log(scopeAuGlobal) // fonctionne
console.log(scopeAuGlobalImplicite) // fonctionne
```

Dans ce cas, on voit bien que `scopeAuGlobal` est accessible tout le temps dans notre script. 
Elle vaut __undefined__ avant l'appel de la fonction car aucune valeur ne lui a été affectée au départ, 
mais une fois la fonction appelé, elle possède bien sa valeur.  
Pour ce qui est de `scopeAuGlobalImplicite`, ayant été déclarée sans mot clé, elle ne sera accessible 
qu'après l'appel de la fonction, car avant ça l'exécution ne connait pas l'existance de cette variable 
(et génère donc une Reference Error). C'est ce qu'on appelle une **déclaration implicite**. 

<br>
<br>

Pour conclure, il faut donc bien faire attention à la portée de ses variables afin de ne pas créer 
de problème de mémoire, performance ou encore d'erreurs en ne maitrisant pas cette portée.

TIPS :
- ne pas utiliser le mot clé "var"
- ne pas utiliser la déclaration implicite
- faire attention au **masquage** (c'est à dire nommer une même variable dans 2 scopes différents).
```js
const nom = 'Foo'

function afficherNom() {
  const nom = 'Bar'
  console.log(nom) // Bar
}

console.log(nom) // Foo
```


<br>
<br>

---
Suite : [L'hoisting](../chapitre2-langage/2-hoisting.md)

---
<br>

Pour voir et utiliser le script entier : [rendez vous ici](/dist/chapitre2-langage/scope.js)
