console.log('init module 2')

function module2 () {
  console.log('function module2')
}

// type d'export 1
// module.exports = {
//   module2
// }

// type d'export 2
exports.module2 = module2