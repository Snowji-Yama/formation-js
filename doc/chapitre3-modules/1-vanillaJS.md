## Les modules en JS vanilla


### Définition

Au sens propre, un module est un **élément pouvant être combiné à d'autres** de même nature. Dans le
cas du domaine de la programmation, ça sera donc un pattern d'**organisation de fichier et de code**.
Pour faire exmple, un module va être un bloc de code indépendant pouvant être utilisé à
plusieurs endroits pour enrichir d'autres blocs de code.

Généralement en JS, chaque module aura son propre fichier séparé pour être indépendant du
reste du code.

<br>


### Pourquoi les utiliser

L'utilisation de ce pattern et de cette syntaxe va permettre de résoudre plusieurs problèmes.

La première problématique est les **conflits** possibles entre plusieurs fichiers.  
Vu dans la section scope précédemment, on sait maintenant que toutes variables ou fonctions
créer à la racine dans un fichier appartiennent au scope global. Si plusieurs fichiers JS coéxistent
il partage alors le même scope.  
De plus aujourd'hui, dans les applications JS, il est très courant d'utiliser des librairies externes pour
gagner du temps de développement et avoir accès à des fonctionnalités toutes prêtes.
Si par malheur une des librairies ou un de nos autres fichiers déclarait une variable globale avec le même
nom que la votre, de nombreux bugs apparaitront car il y aura un conflit sur les valeurs possibles.  
Travailler avec le pattern module permettra de résoudre cette problématique car chaque module aura
sont propre contexte, son propre scope.

La deuxième problématique qui est fortement liée est celle de **l'organisation des fichiers**.  
Initialement, le JS était utilisé pour faire de petits scripts. Aujourd'hui, des applications
entières se base sur le langage. Il faut donc pouvoir organiser, séparer son code de façon lisible,
logique et maintenable dans le temps. La séparation via les modules peut répondre à cette problématique.


---
### Démonstration
<br>

#### 1) 2 fichiers, oui... mais pourtant bien partagé

Imaginer vouloir créer une application nécessitant d'avoir du code dans un premier fichier (car
il concerne par exemple la gestion des utilisateurs), puis du code dans un second fichier (concernant
cette fois-ci la gestion de vos articles par exemple).  
Voici un exemple simple permettant d'illustrer les propos sur le scope et donc la communication possible
entre deux fichiers.

```js
// fichier module-1.js
let foo = 'foo'
```
```js
// fichier module-2.js
console.log(foo) // fonctionne
```

L'observation est net, on peut accéder à la variable `foo` dans le fichier module-1 **mais aussi dans module-2**
car foo appartient au scope global du JS de notre application. Donc si par erreur, un jour, une autre
déclaration d'une variable nommée foo, ou d'une assignation de valeur dans le fichier module-2, il se peut
que ça puisse créer des effets indésirables sur l'autre partie du code et donc sur l'application en elle même.

<br>

#### 2) Définir un scope pour créer de l'isolation

Pour contrer le problème ci-dessus, il faut donc isoler notre code. Pour ceci, il suffit d'utiliser
le concept de [scope](../chapitre2-langage/1-scope.md) vu dans le chapitre 2, plus particulièrement
le scope d'une fonction.

Dans cette solution, le but est d'**encapsuler**  l'ensemble du code de nos fichiers dans une fonction
afin de ne plus être dans le scope global, mais celui de la fonction. Notre code est maintenant regroupé
et isoler tant qu'il se trouve dans notre fonction, et représente donc **un module**.

Dans l'exemple ci-dessous, on peut observer que le console retournera une erreur au moment de vouloir
accéder à la variable `bar` depuis le fichier module-2 car elle appartient au scope du module Module1
(qui n'est donc qu'une fonction).

```js
// fichier module-1.js
function Module1() {
  let bar = 'bar'
  // ... reste du code
}

Module1()
```
```js
// fichier module-2.js
console.log(bar) // echoue, reference error
```

Malgré cette solution, si on réfléchit bien, il reste toujours un monde où un conflit est possible,
Si deux fichiers nomment leur module avec le même nom, il y aura là aussi un problème de conflit
étant donné que ces fonctions sont toutes deux dans le scope global.

<br>

#### 3) Anonymiser les modules pour être imbattable

Pour contrer le dernier problème et "anonymiser" notre module, l'utilisation des **IIFE** est de mise.  
IIFE pour **Immediately Invoked Function Expression** soit "Expression de Fonction Invoquée Immédiatement"
représente une synthaxe permettant de définir une fonction anonyme et de l'exécuter à la suite de sa
définition. Voici immédiatement un exemple pour illustrer ce concept :

```js
// fichier module-1.js
;(function (param) {
  let bar = 'bar'
  // ... reste du code
  console.log(param)
})('paramValue')
```

Avec cette synthaxe, notre code de ce fichier est totalement isolé, anonymiser et peut donc être utilisé
dans un projet sans se soucier de conflit potentiel.  
On peut voir que pour comme toute fonction, il est possible de passer des paramètres à cette IIFE, et
donc les manipuler à l'intérieur. Pour finir, cette fonction peut aussi retourner une valeur ce qui
peut permettre de faire communiquer des modules entre eux.

<br>

#### 4) La mise en pratique

Voici donc un exemple simple permettant de visualier toutes les étapes précédents afin d'avoir du code
isolé et pouvant communiquer entre eux.

```js
// fichier module-2.js
const Module2 = (function () {
  function getName() {
    return 'module-2'
  }

  return {
    getName
  }
})()
```
```js
// fichier module-1.js
;(function (Module2) {
  console.log(Module2.getName())
})(Module2)

```

Dans ce dernier exemple, on observe bien l'utilisation des concepts précédents afin d'utiliser un module dans 
un autre.
Effectivement, il y a un moment où il est impératif de nommer notre `Module 2` afin de pouvoir l'inclure 
et l'utiliser dans le fichier `module-1.js`, nous limitons tout de même le champ de conflit à une variable 
potentielle. De plus, pour ce qui est des librairies externes, seule la fonction anonyme serait exposée et donc 
c'est la possibilité de nommer comme on le souhaite ce module externe.
Vrai bémol, l'ordre des imports. Comme le chapitre 2 l'a montré, il est important dans ce cas d'importer 
`module-2.js` **AVANT** `module-1.js` afin que celui-ci soit rien déclaré dans le scope comme on peut le voir 
dans [index.html](/dist/index.html).

Heureusement, nous verrons qu'aujourd'hui il existe des outils comme dans NodeJS ou encore grâce à Webpack 
pour ne pas se soucier des ordres d'import.

<br>
<br>

---
Suite : [Les Modules en NodeJS](../chapitre3-modules/2-nodeJS.md)

---
<br>

Pour voir et utiliser les scripts entiers :  
[index.html](/dist/index.html)  
[exemple 1](/dist/chapitre3-modules/exemple-1)  
[exemple 2](/dist/chapitre3-modules/exemple-2)  
[exemple 3](/dist/chapitre3-modules/exemple-3)

Source :

[MDM IIFE](https://developer.mozilla.org/fr/docs/Glossary/IIFE)
