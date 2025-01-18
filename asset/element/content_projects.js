const pageDescription = "The collection of every tiny idea in real life."
const tagList = {
    'Home Page': ['Web Development', 'Software Engineering','--'],
    'Kuroba': ['Web Development', 'Software Engineering','--'],
    'Stock Correlation Analysis': ['Web Development', 'Finance', 'Data Science','--'],
    'HKUST CSE Internship': ['Software Engineering','--']
}

const linkList = {
    'Home Page': ['https://vibing-onion.github.io/home','https://github.com/vibing-onion/home'],
    'Kuroba': ['https://vibing-onion.github.io/Kuroba/','https://github.com/vibing-onion/Kuroba'],
    'Stock Correlation Analysis': ['https://vibing-onion.github.io/Stock-Correlation-Analysis/', 'https://github.com/vibing-onion/Stock-Correlation-Analysis'],
    'HKUST CSE Internship': ['https://github.com/vibing-onion/HKUST-CSE-intern','https://github.com/vibing-onion/HKUST-CSE-intern']
}

let pageDescription_ =  document.getElementById("pageDescription")
pageDescription_.innerHTML = pageDescription

const createCard = (e) => {
    let card = document.createElement('div')
    let picture= document.createElement('img')
    let title = document.createElement('a')

    card.className = 'card'
    picture.className = 'card_picture'
    title.className = 'title_link'
    title.href = linkList[e][0]
    title.innerHTML = e
    picture.src = 'asset/photo/' + e + '.jpeg'

    card.appendChild(picture)
    card.appendChild(title)

    return card;
}

const searchProjectByTag = () => {
    let loadbox = document.getElementById('loadbox')
    loadbox.style.display = 'none'
    while(loadbox.firstChild){
        loadbox.firstChild.remove()
    }

    const tag = document.getElementById('tagSearch').value
    r = []
    for(const [key, val] of Object.entries(tagList)){
        if(val.includes(tag)){
            r.push(key)
        }
    }
    r.forEach((e) => {
        let card = createCard(e)
        loadbox.appendChild(card)
    });
    loadbox.style.display = 'flex'
}

document.getElementById('tagSearch').onchange = searchProjectByTag