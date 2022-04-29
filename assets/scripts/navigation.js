function scrollToClickedAnchor() {
    const anchors = document.querySelectorAll("a[href^='#']")
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault()
            const getHrefAttr = this.getAttribute("href")
            const target = document.querySelector(getHrefAttr)
            target.scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
scrollToClickedAnchor()

function scrollToTop() {
    window.addEventListener("scroll", function () {
        const topButton = document.getElementById
        ("scroll-up-button")
        if (window.pageYOffset >= 400) {
            with (topButton) {
                style.display = "block"
                addEventListener("click", function (event) {
                    const target = document.querySelector(".jumbotron")
                    event.preventDefault()
                    target.scrollIntoView({
                        behavior: "smooth"
                    })
                })
            }
        } else {
            topButton.style.display = "none"
        }
    })
}
scrollToTop()