
function appendPost(post) {
    let contentTable = document.querySelector(".articles")
    let card = document.createElement("div")
    card.setAttribute("class", "card")

    let card_body = document.createElement("div")
    card_body.setAttribute("class", "card-body")

    let input = document.createElement("input")
    input.value = post.id
    input.setAttribute("name", "id")
    let button = document.createElement("button")
    let selected = document.createElement("input")
    selected.value = false
    selected.setAttribute("name", "selected")
    button.setAttribute("type", "submit")
    button.addEventListener("click", () => {
        selected.value = true
    })
    card_body.appendChild(selected)
    button.innerHTML = post.title
    card_body.appendChild(input)
    card_body.appendChild(button)
    card.appendChild(card_body)
    contentTable.appendChild(card)
}


window.addEventListener("load", async () => {
    let url = "http://deconstructblog.herokuapp.com/api/get/0"

    let response = await fetch(url)
    let result = await response.json()

    

    for(let post of result.result) {
        appendPost(post)
        
    }
})