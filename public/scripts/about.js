


window.addEventListener("load", async () => {
    let url = "https://api.github.com/users/WasixXD"
    let response = await fetch(url)
    let result = await response.json()
    let img = document.querySelector(".img-thumbnail")
    
    img.setAttribute("src", result.avatar_url)


    let title = document.querySelector(".card-title")
    title.innerHTML = `<strong>${result.login}</strong>`

    let caption = document.querySelector(".caption")
    caption.innerHTML = result.bio

    let stats = document.querySelector(".git-stats")
    stats.innerHTML = `${result.followers} followers ${result.following} following`
})