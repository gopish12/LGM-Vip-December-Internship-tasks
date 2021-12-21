  burger = document.querySelector('.burger')
  navbar = document.querySelector('.navbar')
  rightnav = document.querySelector('.rightNav')
  navlist = document.querySelector('.nav-list')

  burger.addEventListener('click', ()=>{
      rightnav.classList.toggle('visiblityresponsive');
      navlist.classList.toggle('visiblityresponsive');
      navbar.classList.toggle('h-navresponsive');
  })