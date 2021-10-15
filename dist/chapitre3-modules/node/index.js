console.log('script node')

// Module1() // not defined, reference error car pas exporté

require('./module2')
// const module2 = require('./module2')

console.log('index')
const Module2 = require('./module2')



Module2.Module2()

// /* -------------- comment node gère l'import ----------------- */
// const ownModule = { exports: {}}
// const __ownFilname = 'index.js'
// const __ownDirname = 'node'
// const ownRequire = () => {}
//
// ;(function(exports, require, module, __filename, __dirname){
// //   const module2 = require('./module2')
// //
// //   console.log('script node')
// //
// // // module1() // not defined, reference error
// //
// //
// //   module2.module2()
//
//   exports.test = 'test'
//   module.exports = {
//     test2: 'test2'
//   }
//   module.exports.test3 = test3
// })(ownModule.exports, ownRequire, ownModule, __ownFilname, __ownDirname)
