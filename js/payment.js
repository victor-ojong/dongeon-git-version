'use strict';
const proceedToPayBtn = document.querySelector("#payNow")

 proceedToPayBtn.addEventListener('click', 
   makePayment)

// HTML PAYMENT STUFFS

// <div id="payment-failed">
//   Uh-oh. Please try again, or contact support if you're encountering difficulties making payment.
// </div>
// <br>
// <form>
//   <div>
//     Your order is ₦54,600
//   </div>
//   <button type="button" class="start-payment-button" onclick="makePayment()">Pay Now</button>
// </form>
// <div id="payment-success">
//   Thank you! Enjoy your awesome cruise.🚢
// </div>
// <div id="payment-pending">
//   Verifying...Setting up your cruise🚢
// </div>
function makePayment(e) {
    e.preventDefault()
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-c43c93bcddd94360c2084925dbf90972-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: 54600,
      currency: "USD",
      payment_options: "card, mobilemoneyghana, ussd",
      callback: function(payment) {
        // Send AJAX verification request to backend
        verifyTransactionOnBackend(payment.id);
      },
      onclose: function(incomplete) {
        if (incomplete || window.verified === false) {
          document.querySelector("#payment-failed").style.display = 'block';
        } else {
          document.querySelector("form").style.display = 'none';
          if (window.verified == true) {
            document.querySelector("#payment-success").style.display = 'block';
          } else {
            document.querySelector("#payment-pending").style.display = 'block';
          }
        }
      },
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "rose@unsinkableship.com",
        phone_number: "08102909304",
        name: "Rose DeWitt Bukater",
      },
      customizations: {
        title: "Legacy Suite Dongeon",
        description: "Payment for an awesome cruise",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    });
  }

  function verifyTransactionOnBackend(transactionId) {
    // Let's just pretend the request was successful
    setTimeout(function() {
      window.verified = true;
    }, 200);
}
  




   function sendMail() {
  const  name =  'VICTOR OJONG'
  const reBookCode = `${name.split('').slice(-2).join('') + (Math.floor(Math.random() * 500) + 1) + 'LSD'}`;
  const email = document.querySelector("#")
  
  const params = {
  name,
  email,
    bookingDate,
    amountPaid,
    reBookCode,
    bookingSlot,
    state,
    bookingHour,
    country,
    time,


  }

const serviceId = 'service_o03qvcq'
const templateId = 'template_kyp98y4'
    
emailjs.send(serviceId, templateId, params).then(
  res => {
    console.log(res)
    alert('payment successful')
    }
  ).catch((err)=> console.log(err) )
}

// sendMail()