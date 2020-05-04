let foo = 'foo'


// bloc 1 - fonction module 1 accessible à l'exterieur
// function module1() {
//   let bar = 'bar'
// }
//
// module1()

// bloc 2 - full anonyme, donc tout est "caché"
// ;(function (param) {
//   let bar = 'bar'
//   console.log(param)
// })('param')

// bloc 3
;(function (module2) {
  console.log(module2.getModule())
})(module2)