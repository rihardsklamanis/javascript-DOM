// Your JavaScript goes here.
window.addEventListener("load", function () {

    const Element = document.querySelectorAll('.toggle_me')
    const button = document.querySelector('#button')

    var toggleStatus = false
    button.addEventListener('click', function(e) {
        if (toggleStatus == false){
            Element.forEach(function(element) {
                element.style.display = 'initial'
                toggleStatus = true
            })
        }else{
            Element.forEach(function (element) {
                element.style.display = 'none'
                toggleStatus = false
            })
        }
    })
})