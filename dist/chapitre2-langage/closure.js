// J2
//-- Language
//-- -- Scope
//-- -- -- Part 3

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


// bloc 2

// function parent() {
//   var nombre1 = 1
//   var obj = { nombreObjet: 3 }
//   var nombre2 = 2
//   var tmp = obj.nombreObjet
//
//   function enfant() {
//     console.log(nombre1)
//     console.log(obj.nombreObjet)
//     console.log(tmp)
//   }
//
//   return { enfant, nombre1, obj }
// }
//
// var res2 = parent()
// console.log(res2.nombre1) // 1
// console.log(res2.obj.nombreObjet) // 3
// res2.nombre1 = 11
// res2.obj.nombreObjet = 33
// console.log(res2.nombre1) // 11
// console.log(res2.obj.nombreObjet) // 33
// res2.enfant()
// 1, closure on value of var
// 33, closure on objet value of var obj
// 3, closure value of var tmp (n'a pas de lien de reference avec obj.nb)
