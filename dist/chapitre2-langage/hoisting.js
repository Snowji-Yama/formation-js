// J2
//-- Language
//-- -- Scope
//-- -- -- Part 2

// bloc 1

// nb = 2
// var nb
// console.log(nb)
// works
nbWithLetInGlobal = 4

function test() {
  nbWithoutVar = 1 // expression
  nbWithVar = 2
  nbWithLet = 3
  var nbWithVar // definition (always definition before expression during compilation)
  // let nbWithLet // failed, reference error
  let nbWithLetInGlobal
  console.log(nbWithLetInGlobal) // works bu undefined, new ref is created

}

test()
console.log(nbWithoutVar) // works
// console.log(nbWithVar) // failed, reference error
// console.log(nbWithLet) // failed, reference error
console.log(nbWithLetInGlobal) // works




// bloc 2
f1() // expression, works (always definition before expression during compilation)
// f2() // failed, typed error (definition is done so variable f2 exist in memory but equal undefined, so can't be called)
console.log(f2) // works but undefined

function f1() { // definition
  console.log('f1')
}

var f2 = function() {
  console.log('f2')
}

// f1() // works
f2() // works
f3() // failed, reference error
