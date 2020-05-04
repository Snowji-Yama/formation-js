// blocl 1
// console.log(foo)
// // console.log(bar) // echoue, reference error

// bloc 3
const module2 = (function () {
  function getModule() {
    return 'module2'
  }

  return {
    getModule
  }
})()