const pageDescription = "The collection of every tiny idea in real life."
const tagList = {
    'Home Page': ['Web Development', 'Software Engineering'],
    'Kuroba': ['Web Development', 'Software Engineering'],
    'InvestorHelper': ['Web Development', 'Finance'],
    'HKUST CSE Internship': ['Software Engineering']
}

const root_url = "https://vibing-onion.github.io/"

const linkList = {
    'Home Page': ['home','home'],
    'Kuroba': ['Kuroba','Kuroba'],
    'HKUST CSE Internship': ['HKUST-CSE-intern','HKUST-CSE-intern'],
    'InvestorHelper': ['investorHelper', 'investorHelper']
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
    title.href = root_url + linkList[e][0]
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