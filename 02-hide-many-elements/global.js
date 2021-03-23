const hide = document.querySelectorAll(".hide_me")
const button = document.querySelector("#button")


button.addEventListener('click', function(e) {
    hide.forEach(function(element) {
        element.style.display = "none";
    })
})