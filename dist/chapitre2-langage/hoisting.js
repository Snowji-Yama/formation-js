//-- Langage
//-- -- Scope & Hoisting

/*
 * Rappel
 *
 * nb = 2
 * var nb
 * console.log(nb) // fonctionne car hoisting
 */

// bloc 1
nbAvecLetDansGlobal = 4

function test() {
  nbSansVar = 1 // expression

  nbAvecVar = 2
  var nbAvecVar // définition

  // nbAvecLet = 3
  // let nbAvecLet // échoue, reference error car let/const ne sont pas hoist

  let nbAvecLetDansGlobal
  console.log(nbAvecLetDansGlobal) // fonctionne mais undefined, nouvelle référence créée
}

test()
console.log(nbSansVar) // fonctionne, declaration implicite donc global scope
// console.log(nbAvecVar) // échoue, reference error , declaration explicite donc fonction scope (hoist)
console.log(nbAvecLetDansGlobal) // fonctionne




// bloc 2
f1() // expression
// f2() // échoue, typed error (la définition est fait, f2 existe en mémoire mais vaut undefined, elle ne peut donc pas être appelée)
console.log(f2) // fonctionne mais vaut undefined

function f1() { // définition
  console.log('f1')
}

var f2 = function() {
  console.log('f2')
}

f1() // fonctionne
f2() // fonctionne
// f3() // échoue, reference error
