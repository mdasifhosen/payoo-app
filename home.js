const validPin = 1234;
const transactionsData=[]

// logout
document.getElementById("logout-button").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// function to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innner text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);
  return elementValueNumber;
}

// function to set innertext
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// functin to toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// function to toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }
  document.getElementById(id).classList.remove("border-gray-300");
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
}

// add money

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const bank = getInputValue("bank");

    const accountNumber = getInputValueNumber("account-number");

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if (bank === "Bank") {
      alert("Please select a bank");
      return;
    }

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }

    if (pin !== validPin) {
      alert("please provide valid pin number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);

    const data = {
      name: 'Add Money',
      date:new Date().toLocaleTimeString()
    }
    transactionsData.push(data)
    
  });

// cash out

document.getElementById("Withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValueNumber("agent-number");

  const cashAmount = getInputValueNumber("cash-amount");

  const pin = getInputValueNumber("cash-out-pin");

  const availableBalance = getInnerText("available-balance");

  if (agentNumber.length < 11) {
    alert("please provide valid agent number");
    return;
  }
  if (pin !== validPin) {
    alert("please provide valid pin number");
    return;
  }

  const totalNewBalance = availableBalance - cashAmount;
  if (totalNewBalance < 0) {
    alert("No balance");
    return;
  }

  // document.getElementById("available-balance").innerText = totalNewBalance
  setInnerText(totalNewBalance);

  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
  
});

// transfer money
document.getElementById("transfer-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValueNumber("transfer-number");

  const cashAmount = getInputValueNumber("transfer-amount");

  const pin = getInputValueNumber("transfer-pin");

  const availableBalance = getInnerText("available-balance");

  if (agentNumber.length < 11) {
    alert("please provide valid agent number");
    return;
  }
  if (pin !== validPin) {
    alert("please provide valid pin number");
    return;
  }

  const totalNewBalance = availableBalance - cashAmount;
  if (totalNewBalance < 0) {
    alert("No balance");
    return;
  }

  // document.getElementById("available-balance").innerText = totalNewBalance
  setInnerText(totalNewBalance);
  const data = {
    name: "Transfer Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
});

// bonus system get bonus
const usedCoupons = [];

document.getElementById("bonus-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const coupon = document.getElementById("bonus-coupon").value.trim();
  const availableBalance = getInnerText("available-balance");

  const validCoupons = {
    bonus: 1000,
    free: 500,
  };

  // check valid coupon
  if (!validCoupons[coupon]) {
    alert("❌ Invalid Coupon!");
    return;
  }

  // check already used
  if (usedCoupons.includes(coupon)) {
    alert("⚠️ Coupon already used!");
    return;
  }

  const bonusAmount = validCoupons[coupon];

  const newBalance = availableBalance + bonusAmount;

  // update UI
  setInnerText(newBalance);

  // save used coupon
  usedCoupons.push(coupon);

  alert("🎉 Bonus Added: " + bonusAmount + "৳");

  // clear input
  document.getElementById("bonus-coupon").value = "";

  const data = {
    name: "Get Bonus",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
});

// pay bill
document.getElementById("pay-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const bank = getInputValue("pay");

  const accountNumber = getInputValueNumber("biller-account-number");

  const amount = getInputValueNumber("pay-amount");

  const pin = getInputValueNumber("pay-bill-pin");

  const availableBalance = getInnerText("available-balance");

  if (bank === "pay") {
    alert("Please select a bank");
    return;
  }

  if (accountNumber.length < 11) {
    alert("please provide valid account number");
    return;
  }

  if (pin !== validPin) {
    alert("please provide valid pin number");
    return;
  }

  const totalNewAvailableBalance = availableBalance - amount;

  setInnerText(totalNewAvailableBalance);

  const data = {
    name: "Pay Bil",
    date: new Date().toLocaleTimeString(),
  };
  transactionsData.push(data);
});

// transactions

document.getElementById("transactions-btn").addEventListener('click', function () {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText=''

  for (const data of transactionsData) {
    const div = document.createElement("div")
    div.innerHTML = `
    <div class=" bg-white rounded-b-xl p-3 flex justify-between items-center mt-3">
                <div class="flex items-center">
                <div class=" p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" alt="">
                </div>
            <div class="ml-3">
                <h1>${data.name}</h1>
                <p>${data.date}</p>
            </div>
         </div>
         <i class="fa-solid fa-ellipsis rotate-90"></i>
            </div>
    
    
    `
    transactionContainer.appendChild(div)
  }
  
})
// toggling feature

// add button
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-button");
});

// cash out button
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");
  });

// transfer button
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");
  });

// get bonus button
document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");
    handleButtonToggle("get-bonus-button");
  });

// pay bill toggle
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  handleButtonToggle("pay-bill-btn");
});

// transactions
document
  .getElementById("transactions-btn")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
    handleButtonToggle("transactions-btn");
  });

// document
//   .getElementById("transfer-button")
//   .addEventListener("click", function () {
//     const forms = document.getElementsByClassName("form");
//     for (const form of forms) {
//       form.style.display = "none";
//     }
//     document.getElementById("transfer-money-parent").style.display = "block";
//   });

// actinve btn

// const formBtns = document.getElementsByClassName("form-btn");
// for (const btn of formBtns) {
//   btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
//   btn.classList.add("border-gray-300");
// }
// document.getElementById("add-button").classList.remove("border-gray-300");
// document
//   .getElementById("add-button")
//   .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
