console.log('init Module 2')

function Module2 () {
  console.log('Module2')
}

// type d'export 1
// module.exports = {
//   Module2
// }

// type d'export 2
exports.Module2 = Module2
