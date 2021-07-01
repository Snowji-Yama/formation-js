//-- Langage
//-- -- Scope & Closure

// bloc 1
function parent() {
  var nombre1 = 1
  var nombre2 = 2

  function enfant() {
    console.log(nombre1)
  }

  return enfant
}

var res = parent()
// fil d'exécution
// -> exécution de parent()
// -> retourne la reference de enfant()
// -> le garbage collector supprime le scope de parent() (donc nombre2 n'existe plus)
// -> vu que la reference de enfant() a été retournée et que enfant() a une closure sur nombre1
// (enfant() référence nombre1)
// la référence de nombre1 est donc conservé
res() // le console log s'affiche correctement
