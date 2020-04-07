function f1(params) {
  document.querySelector('#closure').addEventListener('click', function () {
    console.log('click param : ', params)
  })
}

f1('hello world')