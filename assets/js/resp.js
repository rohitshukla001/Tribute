burger =document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
searchbar=document.querySelector('.searchbar')
navfirst=document.querySelector('.navfirst')


searchbar =document.querySelector('.searchbar')

burger.addEventListener('click', ()=>{
searchbar.classList.toggle('v-class');
navList.classList.toggle('v-class');
navbar.classList.toggle('h-nav');
navfirst.classList.toggle('h-nav');

})