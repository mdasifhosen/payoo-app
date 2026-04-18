// login button functionlity

document.getElementById("loginButton").addEventListener('click', function (e) {
    e.preventDefault()
    

    const mobileNumber = 1234567890
    const pinNumber = 1234


    const mobileNumberValue = document.getElementById('mobile-no').value

    const pinNumberValue = document.getElementById("pin").value;

    if (mobileNumberValue === '' || pinNumberValue === '') {
        alert('please phone no and pin no')
        return
    }

    const mobileNumberValueConverted = parseInt(mobileNumberValue)
    
    const pinNumberValueConverted = parseInt(pinNumberValue)
    
    if (
      mobileNumber === mobileNumberValueConverted &&
        pinNumber === pinNumberValueConverted) {
        
      window.location.href = "./home.html";
    } 
    
    else {
      alert("invalid credentials");
    }
})