//-- Langage
//-- -- Scope

var scopeAuGlobal // accessible dans le scope global

function testScope () {
  var scopeDansFonction = 'scopeDansFonction' // accessible seulement dans cette fonction
  scopeAuGlobal = 'scopeAuGlobal' //accessible et modifiable
  scopeAuGlobalImplicite = 'scopeAuGlobalImplicite'

  console.log(scopeDansFonction) // fonctionne

  if (true) {
    var scopeDansBlockCode = 'scopeDansBlockCode'
    let scopeDansBlockCodeAvecLet = 'scopeDansBlockCodeAvecLet'
    console.log(scopeDansBlockCode) // fonctionne
    console.log(scopeDansBlockCodeAvecLet) // fonctionne
  }
  console.log(scopeDansBlockCode) // fonctionne car on utilise "var" (scope de la fonction)
  // console.log(scopeDansBlockCodeAvecLet) // echoue, reference error (scope du block)

  /*
   Comme le cas précédent
  {
    var scopeDansBlockCodeVide = 'scopeDansBlockCodeVide'
    let scopeDansBlockCodeVideAvecLet = 'scopeDansBlockCodeVideAvecLet'
  }
  */
}

console.log(scopeAuGlobal) // fonctionne mais vaut undefined
// console.log(scopeAuGlobalImplicite) // echoue, reference error
testScope()
console.log(scopeAuGlobal) // fonctionne
console.log(scopeAuGlobalImplicite) // fonctionne
// console.log(scopeDansFonction) // echoue, reference error
