window.addEventListener("load", function () {
    const show = document.querySelectorAll(".show_me")
    const button = document.querySelector("#button")

    button.addEventListener('click', function(e) {
        show.forEach(function(element) {
            element.style.display = "initial";
        })
    })
})
