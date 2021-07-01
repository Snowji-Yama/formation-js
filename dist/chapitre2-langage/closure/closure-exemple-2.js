//-- Langage
//-- -- Scope & Closure

// bloc 2
function parent() {
  var nombre1 = 1
  var obj = { nombreObjet: 3 }
  var nombre2 = 2
  var tmp = obj.nombreObjet

  function enfant() {
    console.log(nombre1)
    console.log(obj.nombreObjet)
    console.log(tmp)
  }

  return { enfant, nombre1, obj }
}

var res2 = parent()

console.log(res2.nombre1) // 1
console.log(res2.obj.nombreObjet) // 3

res2.nombre1 = 11
res2.obj.nombreObjet = 33
console.log(res2.nombre1) // 11
console.log(res2.obj.nombreObjet) // 33

res2.enfant()
// résultat des console.log de la fonction enfant()
// 1, closure sur la valeur de nombre1
// 33, closure sur la valeur de l'objet 'obj'
// 3, closure sur la valeur de tmp (n'a pas de lien de reference avec obj.nombreObjet)
