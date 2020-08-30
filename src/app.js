import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './css/style.scss'
import { showCards } from './js/home/homeFunctions'
import { formEventListener } from './js/post/postFunctions'
import { searchHandling } from './js/search/search'

var navElements = Array.from(document.getElementsByClassName('nav-link'))
var sections = Array.from(document.getElementsByTagName('section'))

// navigation
navElements.forEach((span) => {
  span.addEventListener('click', (event) => {
    navElements.map((x) => x.parentElement.classList.remove('active'))
    event.target.parentElement.classList.add('active')
    sections.forEach((section) => {
      if (section.id == span.attributes.name.value) {
        section.style.display = 'block'
      } else {
        section.style.display = 'none'
      }
    })
  })
})
// --
showCards()
searchHandling()
formEventListener()
