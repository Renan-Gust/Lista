var input = document.querySelector("#item")
var list = document.querySelector("ul")

document.querySelector("button").addEventListener("click", () => {
    var addItem = input.value
    input.value = ""

    var createLi = document.createElement("li")
    var createSpan = document.createElement("span")
    var createButton = document.createElement("button")

    createLi.appendChild(createSpan)
    createSpan.textContent = addItem
    createLi.appendChild(createButton)
    createSpan.appendChild(createButton)

    createButton.textContent = "Excluir"

    list.appendChild(createLi)

    createButton.onclick = function() {
        list.removeChild(createLi)
    }


    input.focus()
})


