var menuButton = document.getElementById('mobMenu')

var mobileMenu = document.querySelector('.navMobile')

menuButton.addEventListener('click', function(e){
    mobileMenu.classList.toggle('showMobileMenu')
})