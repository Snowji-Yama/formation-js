## L'histoire de Javascript, simplifiée


### La Création

**Javascript** a été créé en 1995 par Netscape (et en particulier par Brendan Eich). Ce langage était 
destiné à la base pour être côté serveur (Livescript). Ceci n'a jamais vraiment pris et Netscape 
travailla en parallèle à la version client.  
On doit le nom de Javascript ensuite par l'inspiration du langage Java ainsi que dû au partenariat 
entre Sun et Netscape.  
Javascript devait être un complément à Java dans son utilisation côté web, il fut donc le 
manipulateur de DOM (et plus) qu'on connait aujourd'hui.  
Le JS fût ensuite standardisé sous le nom d'**ECMASCRIPT**

<br>


### L'amélioration
En 2002, un format de données basé sur la structure du Javascript va naitre et pousser le langage 
vers le haut : le **JSON** (JavaScript Object Notation). Il ne sera donc plus seulement un 
manipulateur de DOM, mais aussi de données.

<br>

### L'ascencion
Suite à la création du JSON, le Javascript gagne du terrain du côté des développeurs. Quelques annnées 
plus tard, en 2008, Google sort le **V8**, un moteur javascript très puissant, qui sera par exemple 
utilisé dans Google Chrome.  
Il a pour but de faire l'interprétation du JS, mais aussi de la compilation pour transcrire le Javascript 
en langage machine. Cette phase est là pour gagner en rapidité d'exécution (ce qui demande par conséquent 
plus de ressources, d'où la RAM utilisé par Google Chrome par exemple).  
Cette compilation qui sera effectuée à la volée entre la demande (accès à une page via son url) 
et son affichage porte le nom du concept **Just In Time**.

En 2009 vient **Node JS**, une autre création qui a boosté Javascript. Il a été créé afin de pouvoir 
faire de l'applicatif. Node JS utilise evidemment le V8 pour interpréter son JS. A prendre ou à laisser 
, l'exécution du code est en "mono thread" pour Node JS.

Peu après en 2009, Google pousse une nouvelle fois le JS avec la sortie de la première version d'**AngularJS**. 
C'est un Framework Javascript permettant de développer des pages web (et donc des sites complets). 
C'était novateur car c'était le premier framework permettant de faire de l'applicatif front avec une structure 
, des règles et des concepts forts (**data binding**, MVC Modèle Vue Contrôleur, **MVVM** Modèle Vue VueModèle)  
Ce framework donnera ensuite des idées à d'autres de prendre une part du gateau et viendront les concurrents
**React** et **VueJS**.

Pour finir, il y a maintenant le terrain du mobile qui est chassé par le Javascript avec des frameworks
comme **React Native**.

<br>
<br>

---
Suite : [Le scope](../chapitre2-langage/1-scope.md)

---
<br>

source de la section : 

[Javascript](https://fr.wikipedia.org/wiki/JavaScript)  
[ECMAScript](https://fr.wikipedia.org/wiki/ECMAScript)  
[CommonJS](https://fr.wikipedia.org/wiki/CommonJS)  
[JSON](https://fr.wikipedia.org/wiki/JavaScript_Object_Notation)  
[V8](https://fr.wikipedia.org/wiki/V8_(moteur_JavaScript))  
[Node JS](https://fr.wikipedia.org/wiki/Node.js)  
[AngularJS](https://fr.wikipedia.org/wiki/AngularJS)  
[React](https://fr.wikipedia.org/wiki/React_(JavaScript))  
[VueJS](https://fr.wikipedia.org/wiki/Vue.js)  
[React Native](https://fr.wikipedia.org/wiki/React_Native)  
