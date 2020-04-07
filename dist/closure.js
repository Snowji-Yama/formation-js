// J2
//-- Language
//-- -- Scope
//-- -- -- Part 3

// bloc 1

function f1() {
  var nb = 2
  var nb2 = 4

  function f2() {
    console.log(nb)
  }

  f2()
}

f1() // works
// nb2 is lost
// f2 closure to nb cause it used this var
// but nb is lost to because all functions are executed, so all references are trashed


// bloc 2

function f11() {
  var nb = 2
  var nb2 = 4

  function f22() {
    console.log(nb)
  }

  return f22
}

var res = f11()
// nb still exists in memory
res()


// bloc 3

function f111() {
  var nb = 222
  var obj = { nb: 999 }
  var nb2 = 444
  var tmp = obj.nb

  function f222() {
    console.log(nb)
    console.log(obj.nb)
    console.log(tmp)
  }

  return { f: f222, nb, obj }
}

var res2 = f111()
console.log(res2.nb) // 222
console.log(res2.obj.nb)
res2.nb = 666
res2.obj.nb = 888
console.log(res2.nb) // 666
console.log(res2.obj.nb)
res2.f() // 222, closure on value of var



// var test1 = 3
// var test2 = test1
// test2 = 4
