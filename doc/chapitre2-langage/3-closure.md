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

<br>
<br>

---

Pour voir et utiliser le script entier :  
[rendez vous ici (js classique)](/dist/chapitre2-langage/closure.js)  
[ainsi qu'ici (fonctionnement jquery)](/dist/chapitre2-langage/closureJquery.js)


Source : 

[MDN Closure](https://developer.mozilla.org/fr/docs/Web/JavaScript/Closures)