function gatherOrderDetails () {

//GETTERS
    //getEmail
    const email = document.getElementById('email').value;

    //getName
    const givenname = document.getElementById('givenname').value;
    const surname = document.getElementById('surname').value;

    //getAddress
    const address = document.getElementById('address').value;
    const apartmentsuite = document.getElementById('apartmentsuite').value;
    const city = document.getElementById('city').value;
    const stateterritory = document.getElementById('stateterritory').value;
    const countryregion = document.getElementById('countryregion').value;

    //getPhone
    const phone = document.getElementById('phone').value;

    //cartTotal
    var ordertotal = document.getElementById('ordertotal').value;
 
//SETTERS
    //setEmail
    localStorage.setItem("EMAIL", email);

    //setName
    localStorage.setItem("GIVENNAME", givenname);    
    localStorage.setItem("SURNAME", surname);

    //setAddress
    localStorage.setItem("ADDRESS", address);
    localStorage.setItem("APARTMENTSUITE", apartmentsuite);
    localStorage.setItem("CITY", city);
    localStorage.setItem("STATETERRITORY", stateterritory);
    localStorage.setItem("COUNTRYREGION", countryregion);

    //setPhone
    localStorage.setItem("PHONE", phone);

    //cartTotal
    localStorage.setItem("ORDERTOTAL", ordertotal);

    return;
}

