const education = [
  'Bachelor of Engineering in Computer Science - HKUST',
  'Exchange Student - UWaterloo'
]

const course = [
  'Foundational C# with Microsoft - freeCodeCamp',
  'Fundamentals of Deep Learning - Nvidia',
  'The Future of Payment Technologies - UMich',
  'Introduction to Data Science in Python - UMich'
]

let edu = document.getElementById('education')
let edu_ul = document.createElement('ul')
edu_ul.className = "list-group list-group-flush"
for(let i=0; i<education.length; i++){
  let p = document.createElement('p')
  p.innerHTML = education[i]
  let l = document.createElement('li')
  l.style.textAlign = 'left'
  l.appendChild(p)
  l.className = "list-group-item list-group-item-action"
  edu_ul.appendChild(l)
}
edu.appendChild(edu_ul)

let crs = document.getElementById('course')
let crs_ul = document.createElement('ul')
crs_ul.className = "list-group list-group-flush"
for(let i=0; i<course.length; i++){
  let p = document.createElement('p')
  p.innerHTML = course[i]
  let l = document.createElement('li')
  l.style.textAlign = 'left'
  l.appendChild(p)
  l.className = "list-group-item list-group-item-action"
  crs_ul.appendChild(l)
}
crs.appendChild(crs_ul)

let skillbar = document.getElementById('skillbar')
skillbar.style.height = (window.innerHeight * 0.5).toString() + 'px'

let contentbox = document.getElementById('contentbox')
contentbox.style.display = 'flex'