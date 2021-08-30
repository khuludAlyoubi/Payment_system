var item = 0
// the items that are viewed on the home page.
// each item is associated with a item code, which is used to fetch details in the checkout page
// product 1
document.getElementById("buy_1").addEventListener('click', function(){

    item = 1
    document.cookie="item="+1
    window.location.replace("https://alice-shop.herokuapp.com/checkout")

})
// product 2
document.getElementById("buy_2").addEventListener('click', function(){

    item = 2
    document.cookie="item="+2
    window.location.replace("https://alice-shop.herokuapp.com/checkout")

})
// product 3
document.getElementById("buy_3").addEventListener('click', function(){

    item = 3
    document.cookie="item="+3
    window.location.replace("https://alice-shop.herokuapp.com/checkout")

})

