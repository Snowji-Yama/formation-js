console.log('init Module 2')

function fonctionDeModule2 () {
  console.log('fonctionDeModule2')
}

// type d'export 1
// module.exports = {
//   fonctionDeModule2
// }

// type d'export 2
exports.fonctionDeModule2 = fonctionDeModule2
