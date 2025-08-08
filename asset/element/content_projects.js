const pageDescription = "The collection of every tiny idea in real life."
const tagList = {
    'Home Page': ['Web Development', 'Software Engineering','--'],
    'Kuroba (Word Guess)': ['Web Development', 'Software Engineering','--'],
    'InvestorHelper': ['Web Development', 'Finance','--'],
    'HKUST CSE Internship': ['Software Engineering','--'],
    // 'Student Performance': ['Data Science','--'],
    'DevBoost': ['Software Engineering','--'],
    // 'Market Breadth Dashboard': ['Software Engineering', 'Data Science','--'],
    'WQU DataSci Lab Notes': ['Data Science','--']
}

const root_url = "https://github.com/vibing-onion/"

const linkList = {
    'Home Page': ['home','home'],
    'Kuroba (Word Guess)': ['Kuroba','Kuroba'],
    'HKUST CSE Internship': ['HKUST-CSE-intern','HKUST-CSE-intern'],
    'InvestorHelper': ['investorHelper', 'investorHelper'],
    'Student Performance': ['Student-Performance-MLR','Student-Performance-MLR'],
    'DevBoost': ['devBoost','devBoost'],
    'Market Breadth Dashboard': ['market_breadth', 'market_breadth'],
    'WQU DataSci Lab Notes': ['WQU-Course','WQU-Course']
}

let pageDescription_ =  document.getElementById("pageDescription")
pageDescription_.innerHTML = pageDescription
let tagSearch = document.getElementById('tagSearchDiv')
tagSearch.style.backgroundColor = "rgba(255, 255, 255, 0)"

const createTag = (i) => {
    let tag = document.createElement('span')
    tag.innerHTML = i
    tag.className = "badge text-bg-warning small_badge"
    return tag
}

const createCard = (e) => {
    let card = document.createElement('div')
    let picture= document.createElement('img')
    let title = document.createElement('a')

    card.className = 'card'
    picture.className = 'card_picture'
    title.className = 'title_link'
    title.href = root_url + linkList[e][0]
    title.innerHTML = e
    picture.src = 'https://vibingoniongithubpage.s3.ap-east-1.amazonaws.com/photo/' + e.replace(/ /g, '+') + '.jpeg'
    card.style.margin = 'auto'

    card.appendChild(picture)
    card.appendChild(title)
    tagList[e].forEach((i) => {
        if(i == '--') return
        newTag = createTag(i)
        card.appendChild(newTag)
    })

    return card;
}

const searchProjectByTag = () => {
    let loadbox = document.getElementById('loadbox')
    loadbox.style.flexWrap = 'wrap'
    loadbox.style.gap = '10px'
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