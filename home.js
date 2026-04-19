// logout
document.getElementById("logout-button").addEventListener('click', function () {
    window.location.href='./index.html'
})


const validPin=1234
document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault()
    
    const bank=document.getElementById('bank').value
    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value)

    const pin = parseInt(document.getElementById("add-pin").value)

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (bank === "Bank") {
      alert("Please select a bank");
      return;
    }

    if (accountNumber.length < 11) {
        alert("please provide valid account number")
        return
    }

    if (pin !== validPin) {
        alert('please provide valid pin number')
        return
    }
    
    const totalNewAvailableBalance = amount + availableBalance

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
})



// toggling feature

document.getElementById("add-button").addEventListener('click', function () {
    document.getElementById("cash-out-parent").style.display='none'
    document.getElementById("add-money-parent").style.display = "block";
})


document.getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });