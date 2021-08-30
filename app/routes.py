from app import app
from flask import render_template, request, send_from_directory, jsonify

#importing stripe to use stripe payments
import stripe
import json
# stripe secret key, used to call stripe APIs.
# Can are retrieved from here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = '' # add your api here

@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r

#API for home page of the website
#Two routes '/' and '/home' both will redirect to home page
#For the css and html, index.html is rendered
@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

#API for checkout/cart page of the website
#Route'/checkout' will redirect to home page
#For the css and html, checkout.html is rendered
@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

#API for success/after payment page of the website
#Route'/success' will redirect to home page
#For the css and html, success.html is rendered
@app.route('/success')
def success():
    return render_template('success.html')

#API for creating stripe session and initialsing the stripe payment page for the website
@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
    data = request.json
    #creating a session with stripe with card and alipay payment used
    #By defualt google pay and apple pay are provisioned
    session = stripe.checkout.Session.create(
    payment_method_types=['card', 'alipay'], #specifiying mode of payments
    mode='payment',
    allow_promotion_codes=True, #allowing promotion/discount codes
    line_items=[{
        'price_data': {
                    'currency': 'aud', #specifying the currency
                        'unit_amount': int(data['price'])*100,
                        'product_data': {
                            'name': data['product'],
                        },
                    },
                    'quantity': data['quantity'],
    }],

    #url to be called on successful payment - success page of the website
    success_url='https://alice-shop.herokuapp.com/success',
    #url to be called on cancelling payment or changing payment - checkout/cart page of the website
    cancel_url='https://alice-shop.herokuapp.com/checkout',
    )

    return jsonify(id=session.id)

#Adding details to the cart to show amout
cart = {
    'amount': 100,
    'currency': 'AUD'
}

#using render template to initiate the bank debit page
@app.route('/bankDetails')
def bankDetails():
    return render_template('bankPayment.html')

#Calling the PK key for stripe and payment details to initiate the bank debit payment page
@app.route('/config', methods=['GET'])
def get_PUBLISHABLE_KEY():
    return jsonify({
        'publishableKey': "",
        'cart': cart
    }) 

#creating payment intent for bank debit card, to initiate the customer and payment for the bank
@app.route('/create-payment-intent', methods=['POST'])
def create_payment():
    data = json.loads(request.data)
    # Create a new customer object so that we can
    # safe the payment method for future usage.
    #Customer is registered for future references using email id, retrived for the direct bank debit payment page
    customer = stripe.Customer.create(
        name=data['name'],
        email=data['email']
    )

    # Create a PaymentIntent to initiate direct debit
    intent = stripe.PaymentIntent.create(
        payment_method_types=['au_becs_debit'],
        setup_future_usage='off_session',
        customer=customer['id'],
        amount=cart['amount'],
        currency=cart['currency']
    )

    try:
        # Send publishable key and PaymentIntent details to client
        return jsonify({'clientSecret': intent.client_secret})
    except Exception as e:
        return jsonify(error=str(e)), 403
