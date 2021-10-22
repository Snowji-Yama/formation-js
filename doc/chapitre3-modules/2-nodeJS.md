## Les modules en NodeJS

### Rapide topo sur NodeJS

NodeJS est un exécutable Javascript incorporant le V8 de Chrome pour cet effet, avec une multitude d'outils 
supplémentaires comme des librairies permettant la manipulation de fichiers, mais surtout son système de 
modules permettant une bonne gestion du code.  
C'est sur ce dernier point que cette étape va se concentrer.

### les Require / Export

Dans un contexte **browser**, l'exemple suivant aurait parfaitement fonctionné, mais pas dans celui de **node**. 
Le scope des fichiers n'est pas partagé, ce qui va permettre une meilleure organisation de code. 

```js
// fichier module-1.js
function Module1() {
  console.log('module 1')
}
```
```js
// index.js
Module1() // reference error
```

Le fait que Node gère cette séparation seul aide grandement donc la gestion du code et des conflits 
potentiels. Reste encore le point de la communication entre ces fichiers. C'est là qu'entrent en jeu les mots-
clé `require` et `exports`.  
Si l'exemple précédent n'a pas fonctionné, c'est parce que notre `Module1` n'a pas été exporté (c-a-d ajouté 
au scope de Node) puis qu'il n'a pas été require (c-a-d explicitement ajouté au scope de l'index.js).

Voici l'illustration d'un simple module et de son utilisation :

```js
// fichier module-2.js
function Module2 () {
  console.log('Module2')
}

// type d'export 1
// module.exports = {
//   Module2
// }

// type d'export 2
exports.Module2 = Module2
```
```js
// index.js
const Module2 = require('./module-2')
Module2.Module2()
```

Décrire l'exportation avec 2 méthodes
Expliquer ensuite l'importation pour l'utilisation

Expliquer la différence entre les 2 méthodes et pourquoi utiliser l'une


(38min)

<br>
<br>

---
Suite : COMING SOON

---
<br>

Pour voir et utiliser les scripts entiers :  
[example](/dist/chapitre3-modules/node)  

Source :

[NodeJS doc](https://nodejs.org/en/docs/)  
[Wiki](https://fr.wikipedia.org/wiki/Node.js)  
[Grafikart](https://grafikart.fr/tutoriels/nodejs-intro-792)
