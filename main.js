const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const asideClosed = aside.classList.contains('inactive');

    if (!asideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const asideClosed = aside.classList.contains('inactive');

    if (!asideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside (){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    
} 