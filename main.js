const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.card-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);




function toggleDesktopMenu() {
    const asideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!asideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const asideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!asideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    const productDetailClose = productDetailContainer.classList.contains('inactive');

    if (!productDetailClose) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

}
function openProductDetailAside (){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Leche LALA 100',
    price: 120,
    image: 'https://d50xhnwqnrbqk.cloudfront.net/images/products/large/7501020548495.jpg'
});

productList.push({
    name: 'Nito',
    price: 15,
    image: 'https://onixsuper.com/wp-content/uploads/2020/08/7501000112784-1.jpg'
});

productList.push({
    name: 'Mantecadas con Nuez',
    price: 25,
    image: 'https://th.bing.com/th/id/R.5089d467fd0d66542ef3078fef548464?rik=YFE0qQDpnvNhzg&pid=ImgRaw&r=0'
});

productList.push({
    name: 'Fanta 500ml',
    price: 18,
    image: 'https://th.bing.com/th/id/R.dc444615da8c244f49633c52ce5bbf93?rik=3Akc3lKPLak3rQ&pid=ImgRaw&r=0'
});

productList.push({
    name: 'Coca-Cola 600ml',
    price: 19,
    image: 'https://th.bing.com/th/id/R.18bd7660feb4c55bd0ea43afe9163f1d?rik=sfZltm0dJqPzXQ&pid=ImgRaw&r=0'
});

productList.push({
    name: 'Yakult',
    price: 8,
    image: 'https://th.bing.com/th/id/R.975516e893c10e6a632878a1b5e1a134?rik=ei32vqWKnGRHXA&pid=ImgRaw&r=0'
});

productList.push({
    name: 'Danonino',
    price: 5,
    image: 'https://www.comercialmeraz.com/wp-content/uploads/2018/02/00750105533998L-5.jpg'
});

productList.push({
    name: 'Gatorade-Naranja 500ml',
    price: 20,
    image: 'https://cdn.shopify.com/s/files/1/0105/9212/4964/products/2145_gatorate_naranje_1600x.jpg?v=1582315087'
});

productList.push({
    name: 'Powerade-Azul',
    price: 5,
    image: 'https://dashboard.parii.app/vistas/img/multimedia/powerade-azul-600ml/poerade%20azul.png'
});

productList.push({
    name: 'Electrolit-Coco',
    price: 22,
    image: 'https://th.bing.com/th/id/OIP.XyhseNfmf0Pghie7-prVewHaHa?pid=ImgDet&rs=1'
});
/*
function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} -> product.image 
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productName = document.createElement('p');
        productName.innerText =  product.name;
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/000/437/871/non_2x/vector-add-to-cart-vector-icon.jpg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}*/
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product = {name, price, image} -> product.image 
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText =  product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    productInfoDiv.appendChild(productName);
    productInfoDiv.appendChild(productPrice);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/000/437/871/non_2x/vector-add-to-cart-vector-icon.jpg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}