

function cardmaker(imagesrc, Title, cName, views, monthsOld, duration) {

    let card = document.createElement("div");
    card.className = "card"


    let kk = document.createElement("div")
    kk.className="kk"
    let img = document.createElement("img")
    img.src = imagesrc
    img.className = "img"

    let Titles = document.createElement("div")
    Titles.innerText = Title
    Titles.className = "TitleOfVideo"

    let chName = document.createElement("div")

    chName.innerText = cName

    let rightpart = document.createElement("div")
    rightpart.className = "rightpart"

    let sl = document.createElement("div")
    sl.className = "sl"

    let view = document.createElement("div")


    if (views < 1000) {
        sl.innerText = views

    }
    else if (views >= 1000 && views < 1000000) {
        let m = views.toString();
        sl.innerText = m.slice(0, (m.length) - 3) + "k"

    } else if (views >= 100000) {
        let m = views.toString();
        sl.innerText = m.slice(0, (m.length) - 6) + "M"



    }
    let old = document.createElement("div")
    old.innerText = monthsOld

    let dur = document.createElement("div")
    dur.innerText = duration
    dur.className = "haha"






    document.querySelector(".cards_container").appendChild(card)
    kk.appendChild(img)
    kk.appendChild(dur)
    card.appendChild(kk)
    
    card.appendChild(rightpart)
    rightpart.appendChild(Titles)
    rightpart.appendChild(sl)
    sl.appendChild(chName)
    sl.appendChild(view)
    sl.appendChild(old)
    img.appendChild(dur)
    kk.appendChild(dur)




}
cardmaker("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ", "Installing VS Code & How Websites Work | Sigma Web Development Course", "Code_with_harry", 2000000, "3 months ago", "31:23")
// cardmaker("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ", "Installing VS Code & How Websites Work | Sigma Web Development Course", "Code_with_harry", 2000000, "3 months ago", 3)
// cardmaker("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ", "Installing VS Code & How Websites Work | Sigma Web Development Course", "Code_with_harry", 2000000, "3 months ago", 3)
// cardmaker("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ", "Installing VS Code & How Websites Work | Sigma Web Development Course", "Code_with_harry", 2000000, "3 months ago", 3)
// cardmaker("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ", "Installing VS Code & How Websites Work | Sigma Web Development Course", "Code_with_harry", 2000000, "3 months ago", 3)
