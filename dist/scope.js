// J2
//-- Language
//-- -- Scope
//-- -- -- Part 1

// bloc 1
var scopedInGlobal // accessible in global scope
function testScope () {
  var scopedInFunction = 'scopedInFunction' // accessible only in this function
  scopedInGlobal = 'scopedInGlobal'
  scopedInGlobalImplicit = 'scopedInGlobalImplicit'

  console.log(scopedInFunction) // works

  if (true) {
    var scopeInBlockCode = 'scopeInBlockCode'
    let scopeInBlockCodeWithLet = 'scopeInBlockCodeWithLet'
  }
  console.log(scopeInBlockCode) // works cause we use "var" (function scope)
  console.log(scopeInBlockCodeWithLet) // failed, reference error (block scope)

  /*
   Same as previous
  {
    var scopeInEmptyBlockCode = 'scopeInBlockCode'
    let scopeInEmptyBlockCodeWithLet = 'scopeInBlockCodeWithLet'
  }
  */
}

console.log(scopedInGlobal) // works but undefined
// console.log(scopedInGlobalImplicit) // failed, reference error
testScope()
console.log(scopedInGlobal) // works
console.log(scopedInGlobalImplicit) // works
// console.log(scopedInFunction) // failed, reference error




// console.log(window)


