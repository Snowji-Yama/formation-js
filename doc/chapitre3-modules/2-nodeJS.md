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

Le fait que Node gère cette séparation seul aide grandement la gestion du code et des conflits
potentiels. Reste encore le point de la communication entre ces fichiers. C'est là qu'entrent en jeu les mots-
clé **require** et **exports**.  
Si l'exemple précédent n'a pas fonctionné, c'est parce que notre fonction `Module1` n'a pas été exportée 
(c-à-d ajoutée au scope de Node) puis qu'elle n'a pas été "require" (c-à-d explicitement ajoutée
au scope de l'index.js).

Voici l'illustration d'un simple module et de son utilisation :

```js
// fichier module-2.js
function fonctionDeModule2 () {
  console.log('fonctionDeModule2')
}

// type d'export 1
// module.exports = {
//   fonctionDeModule2
// }

// type d'export 2
exports.fonctionDeModule2 = fonctionDeModule2
```
```js
// index.js
const Module2 = require('./module-2')
Module2.fonctionDeModule2()
```

<br>

L'idée ici est de considérer nos fichiers comme des modules. Le fichier `module-2` va donc pouvoir posséder 
autant de fonctions que nécessaire pour ensuite rendre accessible celles ayant pour but d'être utilisées à 
l'extérieur de ce module. C'est là qu'entrent en jeu les mots-clé **module.exports** ou **exports**.

Pour pouvoir exporter une fonction, un objet ou autre de notre module, il existe 2 syntaxes :
- la définition peut s'ajouter à l'objet **module.exports**
```js
module.exports = {
  nomDeLaCle: maFonction,
  nomDeLaCle2: monObjet
}
```
- La définition peut s'ajouter directement à **exports** comme ci dessus
```js
exports.nomDeLaCle = maFonction
exports.nomDeLaCle2 = monObjet
```

<br>

Ensuite pour utiliser un module et ses fonctions dans un autre fichier NodeJS, il suffit d'importer ce 
dernier comme dans l'illustration précédente avec le mot réservé **require** qui prend en paramètre le 
fichier correspondant :
```js
const Module = require('./module')
Module.maFonction()
```


### La différence entre les 2 types d'export


Pour comprendre la nuance entre les 2, il faut savoir comment marche l'engine de node. Si on a accès à des
variables comme "module, exports, require", qu'on pourrait appeler magique c'est en réalité parce que node 
les met à disposition et voici comment :

NodeJS wrap notre code dans une FE (Functional Expression), et dans cette fonction il y a en paramètres les
fonctions et objets qui nous intéressent, c'est pour cela qu'on y a accès en toute transparence. Ces paramètres
sont bien évidemment instanciés et mis à jour en amont pour le noyau de nodeJS et tenus à jour.

Voici ce à quoi pourrait ressembler la mécanique de node sur l'exécution d'un des modules :

```js
const ownModule = { exports: {}}
const __ownFilname = 'index.js'
const __ownDirname = 'node'
const ownRequire = () => {}

;(function(exports, require, module, __filename, __dirname){
  // code ...
})(ownModule.exports, ownRequire, ownModule, __ownFilname, __ownDirname)
```

On observe que l'on passe en paramètre la référence de `ownModule` pour la variable **module**, ainsi
la référence de la clé `exports` de ownModule pour **exports**. Là est le hic, en voici la raison avec 
cet exemple :

```js
exports.var1 = 'var1' // n'existera pas
module.exports = {
  var2: 'var2'
}
module.exports.var3 = 'var3' // ok
```

Avec cet exemple, on peut voir que si les 2 méthodes sont utilisées dans un même fichier, cela peut
créer des problèmes car ici, `var1` ne serait en réalité pas exporté étant donné que la référence 
de **exports** est écrasée par l'instruction suivante. 

Il vaut donc mieux toujours utiliser la même méthode tout le temps dans les fichiers. Et pour ce qui
du choix, il peut être préférable d'utiliser **module.exports** afin de maîtriser entièrement
notre objet module de base et de le visualiser plus facilement (et non pas passer par la référence
d'une clé, ce qui donne un aspect plus "magique" à la manipulation), d'autant
qu'il aura la priorité. Cela reste toutefois une histoire de préférence.

TIPS : un fichier ne sera parsé qu'une seul fois par Node. Si vous "require" un même module dans plusieurs
fichiers (voire dans le même fichier par erreur), la lecture de celui-ci ne sera effectuée qu'une seule
fois et Node gardera en mémoire l'export.

<br>
<br>

---
<br>

Pour voir et utiliser les scripts entiers :  
[examples](/dist/chapitre3-modules/node)  

Source :

[NodeJS doc](https://nodejs.org/en/docs/)  
[Wiki](https://fr.wikipedia.org/wiki/Node.js)  
[Grafikart](https://grafikart.fr/tutoriels/nodejs-intro-792)
