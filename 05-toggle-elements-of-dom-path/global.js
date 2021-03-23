// Your JavaScript goes here.
  
window.addEventListener('load', function () {

    const elements = document.querySelectorAll(".second_five li")
    const button = document.querySelector('#toggle_button')

    var togglestat = false
    button.addEventListener('click', function (e) {
        element.forEach(function (element) {
            if (togglestat == false) {
                element.style.display = 'flex'
            }
            else
            {
                element.style.display = 'none'
            }
        })
        togglestat = !togglestat
    })
})   