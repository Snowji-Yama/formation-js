//-- Langage
//-- -- Scope & Hoisting

/*
 * Rappel
 *
 * nb = 2
 * var nb
 * console.log(nb) // fonctionne car hoisting
 */

// bloc 2
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
