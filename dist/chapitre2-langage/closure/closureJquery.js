function f1(params) {
  document.querySelector('#formation').addEventListener('click', function () {
    console.log('click param : ', params)
  })
}

f1('hello world')
