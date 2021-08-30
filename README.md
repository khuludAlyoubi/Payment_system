# Pyment_System

The web app link: https://alice-shop.herokuapp.com/

This app is to integrate different types of secure payment options into an E-Commerce Website.
payment system used: VISA, MasterCard and American Express, Alipay, Apple Pay or Google Pay and Direct Bank Debit

 Home page of the website
 <img width="806" alt="Screen Shot 2021-08-30 at 8 11 07 pm" src="https://user-images.githubusercontent.com/43030302/131323909-73fb31ea-7212-49ae-9da1-666f79362d2b.png">
 
 When a customer clicks the “BUY” button of an item, the customer is forwarded to the following Shopping Cart page 
 <img width="808" alt="Screen Shot 2021-08-30 at 8 13 15 pm" src="https://user-images.githubusercontent.com/43030302/131324071-58988668-2557-4beb-864e-1e666979bacd.png">
 
On the checkout page, you can either change the quantity of the product you wish to purchase or simply checkout to go to the payment page.
If 􏰂ou wish to update the quantit􏰂, just update the quantit􏰂, under the 􏰃Quantit􏰂􏰁 column and click 􏰃Update􏰁 to view the updated price.
<img width="809" alt="Screen Shot 2021-08-30 at 8 14 59 pm" src="https://user-images.githubusercontent.com/43030302/131324319-03efdd20-3263-4850-b514-2a7fd16b26d0.png">

Once you are satisfied with the purchase, click on 􏰃Checkout􏰁 and 􏰂ou will be redirected to the payment page.
<img width="762" alt="Screen Shot 2021-08-30 at 8 16 09 pm" src="https://user-images.githubusercontent.com/43030302/131324446-7cabd9a9-3b74-4bd7-b571-c182c1f4c23c.png">

 you can enter the required details and proceed to payment.
 
##There are 4 ways that can be used for payment.
###1. Payment using Cards.
VISA, MasterCard and American Express card types are supported for the payment For the purpose of testing, please use the below credentials for payment:
Visa Card Number: 4242 4242 4242 4242
Expiry Date: Any future date 􏰀 month/year
CVC: 123
Enter the email address and other card details in the provided space.
Mastercard Number: 5555555555554444
Expiry Date: Any future date 􏰀 month/year
CVC: 123
Enter the email address and other card details in the provided space.
<img width="775" alt="Screen Shot 2021-08-30 at 8 17 40 pm" src="https://user-images.githubusercontent.com/43030302/131324854-d26f4a58-dde3-49bb-94cd-d624024c30a0.png">
<img width="269" alt="Screen Shot 2021-08-30 at 8 18 35 pm" src="https://user-images.githubusercontent.com/43030302/131324858-60f41a26-b674-4a49-9493-469f96b01ed0.png">

###2. Payment using Alipay
To pay using Alipay, choose the option for Alipay in the payment page, as shown in the
below figure.
To continue, click on 􏰃Pa􏰂􏰁y. You will be redirected to Alipay portal to continue the payment. 
Since this is a test environment, hence Stripes will redirect you to its test page,
where we can authorize the payment.
<img width="280" alt="Screen Shot 2021-08-30 at 8 20 33 pm" src="https://user-images.githubusercontent.com/43030302/131325106-0c5e522a-78df-4cf0-af5f-66e554060e79.png">
<img width="813" alt="Screen Shot 2021-08-30 at 8 21 34 pm" src="https://user-images.githubusercontent.com/43030302/131325115-710398ac-5d58-417d-b3b1-e64c5132ae65.png">

###3. Payment using Apple Pay or Google Pay
To pay using Apple pay, choose the option for Apple pay in the payment page, as shown in the below figure. Please note, Apple pay is available only for all Apple products such as mac, iPhone, that is Apple pay should be available for the device you are using.
To continue, click on Apple 􏰃Pa􏰂􏰁 (black button in the above figure). A pop up will be shown, if you have a card added to your Apple pay, else you will be redirected to add the card details to finalize the payment.
Since this is a test environment, hence Stripes mentions that 􏰂ou won􏰁t be charged for this transaction. You can enter 􏰂our apple id password or authori􏰄e b􏰂 touch id. If 􏰂ou don􏰁t wish to proceed, please click on 􏰅Cancel􏰆 button on the top right of the Apple pa􏰂 pop up and 􏰂ou will stay on the payment pay, if you wish to choose any other payment mode.
<img width="370" alt="Screen Shot 2021-08-30 at 8 22 58 pm" src="https://user-images.githubusercontent.com/43030302/131325409-ffdb2872-6655-48f1-843d-071ff7d96903.png">
<img width="277" alt="Screen Shot 2021-08-30 at 8 23 09 pm" src="https://user-images.githubusercontent.com/43030302/131325417-11fe79dd-33f5-4855-8be1-9516232a88e1.png">

To pay using Google pay, choose the option for Google pay in the payment page, as shown in the below figure. Please note, Google pay is available for all non-Apple products such as
android phones, since Google pay should be available for the devices.
To continue, click on Google 􏰃Pa􏰂􏰁 (black button in the above figure). You will be redirected to Google pay options, if you have a card added to your Google pay, else you will be redirected to add the card details to finalize the payment.
<img width="408" alt="Screen Shot 2021-08-30 at 8 25 11 pm" src="https://user-images.githubusercontent.com/43030302/131325629-c9b10171-1411-45fc-8f73-7902bb63ba73.png">
<img width="485" alt="Screen Shot 2021-08-30 at 8 25 28 pm" src="https://user-images.githubusercontent.com/43030302/131325632-0146efcf-bf5d-4428-8ea1-28e153cbeddb.png">

###4. Payment using Direct Bank Debit
If 􏰂ou wish to pa􏰂 using direct bank debit, then from the checkout page, select 􏰃Checkout with Bank Debit􏰁 instead of checkout
This will redirect the user to capture the bank details
For test purposes please use the below details:
 
􏰇 Any name
􏰇 Any email addresses
􏰇 Test BSB number: 000-000
􏰇 Test bank account number: 000123456

Once you have entered the details, click on Confirm payment.
Since this is a test environment, hence Stripes mentions that 􏰂ou won􏰁t be charged for this transaction. You can click on 􏰃PAY􏰁 after ensuring the details are correct.
After, processing payment using any mode of payment mentioned above, on successful payment you will redirected to success page
<img width="821" alt="Screen Shot 2021-08-30 at 8 26 55 pm" src="https://user-images.githubusercontent.com/43030302/131325964-d1c22ff4-cb4e-423c-8913-05acb4ed0a19.png">
<img width="641" alt="Screen Shot 2021-08-30 at 8 27 04 pm" src="https://user-images.githubusercontent.com/43030302/131325970-ce2208b6-0449-4d73-85f6-658d091fe68f.png">
<img width="631" alt="Screen Shot 2021-08-30 at 8 27 57 pm" src="https://user-images.githubusercontent.com/43030302/131325972-5c5a77d8-061c-4656-93e9-eecbd412f8d0.png">
<img width="869" alt="Screen Shot 2021-08-30 at 8 28 28 pm" src="https://user-images.githubusercontent.com/43030302/131325983-bd6d9362-68f6-45b3-9af5-66d00dc3f4ae.png">

 
 
###Discounts:
The website, using Stripe also provides option for Discount or Promotion Code (To add promotions please follow Stripe Account Setup, Step 8 below
On the pa􏰂ment page, 􏰂ou can enter the promotion code, under 􏰃Add Promotions code􏰁 For test purpose, please use code = discount10
This code is set for 10% of the amount. In case of correct and successful code, the amount will be updated.
<img width="580" alt="Screen Shot 2021-08-30 at 8 29 52 pm" src="https://user-images.githubusercontent.com/43030302/131326139-622204fd-1ebc-4b1b-8f2b-3101719d06f3.png">


To get your own Stripe’s API register link: https://dashboard.stripe.com/register
Documentation for the developers are present with Stripe at https://stripe.com/docs/payments?payments=popular
Stripes, provides onetime payment, as well as subscriptions. In the case of this assignment we utilized onetime payment mode (https://stripe.com/docs/checkout/integration-builder), where we as a website owner can accept the payment through stripes.
Step 5: Setting up Stripe Server to access APIs
Stripe provides pre-built checkout and payment pages, in many supporting languages (https://stripe.com/docs/checkout/integration-builder). For this assignment we utilized python and HTML, since we had a Flask-Restful based application.
Stripe has provided step by step guide to implement the logic for accepting payment.

