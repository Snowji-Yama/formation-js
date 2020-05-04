//-- Langage
//-- -- Scope & Hoisting

/*
 * Rappel
 *
 * nb = 2
 * var nb
 * console.log(nb) // fonctionne car ?
 */

// bloc 1
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
