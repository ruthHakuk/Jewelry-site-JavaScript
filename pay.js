document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let cardholderName = document.getElementById("cardholder-name").value;
    let idNumber = document.getElementById("id-number").value;
    let cardNumber = document.getElementById("card-number").value;
    let expiryDate = document.getElementById("expiry-date").value;
    let cvv = document.getElementById("cvv").value;
    let payment = {
      cardholderName: cardholderName,
      idNumber: idNumber,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv
    };
  
    var paymentDetails = document.getElementById("payment-details");
    paymentDetails.innerHTML = `
      <h2>Payment Details:</h2>
      <p><strong>Cardholder Name:</strong> ${payment.cardholderName}</p>
      <p><strong>price:</strong> ${sessionStorage.getItem('finalprice')}</p>
      <p>Payment processed successfully!</p>
    `;
  
    
  });
  