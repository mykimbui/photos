const menuButton = document.querySelector('.menu-button')
const aboutButton = document.querySelector('.about-button')
const contactButton = document.querySelector('.contact-button')
const menuList = document.querySelector('.menu-list')
const bottomBar = document.querySelector('.bottom-bar')
const li = document.querySelectorAll('li.hidden')
let countLast = li.length
let countFirt = 0

menuButton.addEventListener('click', function() {
  console.log('bbjk')
  if(menuList.classList.contains('hidden')) {
    menuButton.classList.remove('border')
    bottomBar.classList.add('border')
    menuList.classList.remove('hidden')
    aboutButton.classList.remove('hidden')
    contactButton.classList.remove('hidden')
    // const clear = setInterval(function() {
    //   li[countLast--].classList.remove('hidden')}
    //   ,300)
    this.innerHTML = 'CLOSE'
  }
  else {
    menuButton.classList.add('border')
    bottomBar.classList.remove('border')
    menuList.classList.add('hidden')
    aboutButton.classList.add('hidden')
    contactButton.classList.add('hidden')
    this.innerHTML = 'MENU'
  }
})
