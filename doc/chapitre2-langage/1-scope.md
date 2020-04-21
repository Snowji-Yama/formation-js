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

```js
function testScope () {
  var scopeDansFonction = 'scopeDansFonction' // accessible seulement dans cette fonction
  console.log(scopeDansFonction) // fonctionne

  if (true) {
    var scopeDansBlockCode = 'scopeDansBlockCode'
    let scopeDansBlockCodeAvecLet = 'scopeDansBlockCodeAvecLet'
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

// console.log(scopeDansFonction) // echoue, reference error
```

<br>
<br>

#### Les variables globales

Une variable sera dite globale car elle sera déclarée "en dehors d'une fonction" comme par exemple tout 
en haut d'un script. Elle sera donc accessible dans tout le script suivant sa déclaration.

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