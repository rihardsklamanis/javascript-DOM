// Your JavaScript goes here.
window.addEventListener('load', function () {

    var htmlname = document.querySelector('#greeting')
    const namebar = document.querySelector('#full_name')
    namebar.addEventListener('keyup', function (e) {
        htmlname.textContent = "Hello " + e.target.value + "!"
    })

})