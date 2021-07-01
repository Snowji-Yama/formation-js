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
