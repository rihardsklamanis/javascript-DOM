// Your JavaScript goes here.
  
window.addEventListener('load', function () {

    const first = document.querySelector('#first')
    const second = document.querySelector('#second')
    const third = document.querySelector('#third')
    first.addEventListener('keydown', function (e) {
        if (first.value.length == 3)
        {
            second.focus()
        }
    })
    second.addEventListener('keydown', function (e) {
        if (second.value.length == 3)
        {
            third.focus()
        }
    })

})