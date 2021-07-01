## Le langage et ses concepts

### Les closures

Une **closure** (ou **fermeture**) est un mécanisme qui se produit quand une fonction interne 
(imbriquée dans une autre) va pouvoir continuer d'accéder à une variable de la fonction parente 
même après son exécution.

Voici un exemple afin d'illustrer cette définition, montrant une closure : 

```js
function parent() {
  var nombre1 = 2
  var nombre2 = 4

  function enfant() {
    console.log(nombre1)
  }

  return enfant
}

var res = parent()

res()
```

Pour montrer la closure présente ici, voici le fil d'exécution de ce code :
1. la fonction ``parent()`` est exécutée
2. parent() retourne la référence de ``enfant()``
3. le garbade collector supprime le scope de parent(), nombre2 n'existe donc plus

Dans cette exemple, on dit que **enfant() a une closure sur nombre1**. Pour le vérifier, 
quand on exécute ``res()`` qui est en réalité une référence de enfant(), nombre1 s'affichera 
correctement car sa référence aura été conservée grâce à la closure.

---
#### Pour aller un peu plus loin

Pour pousser un peu plus le sujet des closures, le prochain exemple possède la même structure mais 
manipule des données plus complexe pour jouer avec les références.

```js
function parent() {
  var nombre1 = 1
  var obj = { nombreObjet: 3 }
  var nombre2 = 2
  var tmp = obj.nombreObjet

  function enfant() {
    console.log(nombre1)
    console.log(obj.nombreObjet)
    console.log(tmp)
  }

  return { enfant, nombre1, obj }
}

var res2 = parent()

console.log(res2.nombre1) // 1
console.log(res2.obj.nombreObjet) // 3

res2.nombre1 = 11
res2.obj.nombreObjet = 33
console.log(res2.nombre1) // 11
console.log(res2.obj.nombreObjet) // 33

res2.enfant()
// résultat des console.log de la fonction enfant()
// 1, closure sur la valeur de nombre1
// 33, closure sur la valeur de l'objet 'obj'
// 3, closure sur la valeur de tmp (n'a pas de lien de reference avec obj.nombreObjet)
```

<br>
<br>

---

Pour voir et utiliser le script entier :  
[exemple 1](/dist/chapitre2-langage/closure/closure-exemple-1.js)  
[exemple 2](/dist/chapitre2-langage/closure/closure-exemple-2.js)  
[exemple du fonctionnement de JQuery](/dist/chapitre2-langage/closure/closureJquery.js)


Source : 

[MDN Closure](https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures)
