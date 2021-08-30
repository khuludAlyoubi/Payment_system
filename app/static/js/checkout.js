function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
// for the item selected to be bought from the home page, getting the item, price and description to be viewed on the checkout page
// since we have static site with only three products, hence item code is compared and corresponding item details are retrieved
item = getCookie('item')
if (item == 1){
    document.getElementById("description").innerHTML = "Product 1"
    document.getElementById("price").innerHTML = "100"
    document.getElementById("total_price").innerHTML = "100"
}

if (item == 2){
    document.getElementById("description").innerHTML = "Product 2"
    document.getElementById("price").innerHTML = "200"
    document.getElementById("total_price").innerHTML = "200"
}

if (item == 3){
    document.getElementById("description").innerHTML = "Product 3"
    document.getElementById("price").innerHTML = "300"
    document.getElementById("total_price").innerHTML = "300"
}

// update cart function
// upon changing the qauntity, the price is multipled by the quantity to get price, which is price*quantity
document.getElementById("update_cart").addEventListener('click', function(){

    var quantity = document.getElementById("quantity").value
    console.log(quantity)
    var price = document.getElementById("price").innerHTML
    console.log(price)
    var total = Number(quantity) * Number(price)
    document.getElementById("total_price").innerHTML = total
})

// Create an instance of the Stripe object with your publishable API key
var stripe = Stripe('pk_test_51HY6LeCcUPdmILR81d5ol1IRfbtyYd7HxqUtOAUfdYm0977X4w9kDNXGnYEzWL7bYxUYMGFbeo0QGJcIMNkNImZO00l7Sy3hVH');
var checkoutButton = document.getElementById('checkout-button');
//on clicking the checkout button on the checkout page, stripe session will be generated using the publishable API
// stripe session is created and the product details such as, price and quantity are also supplied to be viewed on the payment page
checkoutButton.addEventListener('click', function() {
  // Create a new Checkout Session using the server-side endpoint you
  // created in step 3.
    var payload = { 
        'price':document.getElementById('price').innerHTML,
        'quantity':document.getElementById('quantity').value,
        'product': document.getElementById('description').innerHTML
    }
    // stripe api that generates the session and initialises the payment page is called (API present in routes.py)
    fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    body: JSON.stringify(payload)
    })
    .then(function(response) {
    return response.json();
    })
    .then(function(session) {
    return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function(result) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, you should display the localized error message to your
    // customer using `error.message`.
    if (result.error) {
        alert(result.error.message);
    }
    })
    .catch(function(error) {
    console.error('Error:', error);
    });
});
//On clicking the button checkout with bank debit - redirect user to capture bank details
document.getElementById("Bank-Debit").addEventListener('click', function(){
    window.location.replace("https://alice-shop.herokuapp.com/bankDetails")

})