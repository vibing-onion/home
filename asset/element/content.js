let pageDescription = "A tiny playground for a computer science student to bring any ideas into reality."
var pageDescription_ =  document.getElementById("pageDescription")
pageDescription_.innerHTML = pageDescription

let focusBox = document.getElementById('focusBox')
const focusArea = ['Web Scraping', 'Data Analytics', 'Database Management', 'User Experience', 'Software Developement', 'Machine Learning']

focusArea.forEach((e) => {
  let focus = document.createElement('div')
  focus.innerHTML = e
  focus.className = 'scrolling-text' + ' text' + (focusArea.indexOf(e)%3+1)
  focus.style.lineHeight = 35 + 'px';
  focusBox.appendChild(focus)
})