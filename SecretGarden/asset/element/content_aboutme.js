let pageDescription = "HI GUYS! I am Curtis, a Computer Science student in HKUST. I like to discover opportunities and write codes to make my life easier. Photography & Music are good for me."

let pageDescription_ =  document.getElementById("pageDescription")
pageDescription_.style.width = '60%'
pageDescription_.style.margin = 'auto'
pageDescription_.innerHTML = pageDescription


const education = [
  'The Hong Kong University of Science and Technology',
  'Bachelor of Engineering in Computer Science',
  'Extended Major in Artificial Intelligence',
  'Graduating in end 2026'
]

const course = [
  'Fundamentals of Deep Learning - Nvidia',
  'The Future of Payment Technologies - UMich',
  'Introduction to Data Science in Python - UMich',
  'Object-Oriented Programming and Data Structures - COMP2012 HKUST',
  'Programming with C++ - COMP2011 HKUST'
]

let edu = document.getElementById('education')
let edu_ul = document.createElement('ul')
for(let i=0; i<education.length; i++){
  let p = document.createElement('p')
  p.innerHTML = education[i]
  let l = document.createElement('li')
  l.style.textAlign = 'left'
  l.appendChild(p)
  edu_ul.appendChild(l)
}
edu.appendChild(edu_ul)

let crs = document.getElementById('course')
let crs_ul = document.createElement('ul')
for(let i=0; i<course.length; i++){
  let p = document.createElement('p')
  p.innerHTML = course[i]
  let l = document.createElement('li')
  l.style.textAlign = 'left'
  l.appendChild(p)
  crs_ul.appendChild(l)
}
crs.appendChild(crs_ul)

let skillbar = document.getElementById('skillbar')
skillbar.style.height = (window.innerHeight * 0.5).toString() + 'px'

let contentbox = document.getElementById('contentbox')
contentbox.style.display = 'flex'