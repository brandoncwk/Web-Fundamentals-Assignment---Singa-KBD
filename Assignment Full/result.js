window.addEventListener('load', () => {
    
    const email = localStorage.getItem('EMAIL');
    const givenname = localStorage.getItem('GIVENNAME'); 
    const surname = localStorage.getItem('SURNAME');
    const address = localStorage.getItem('ADDRESS');
    const apartmentsuite = localStorage.getItem('APARTMENTSUITE');
    const city = localStorage.getItem('CITY');
    const stateterritory = localStorage.getItem('STATETERRITORY');
    const countryregion = localStorage.getItem('COUNTRYREGION');
    const phone = localStorage.getItem('PHONE');
    const ordertotal = localStorage.getItem('ORDERTOTAL');

    //Email
    document.getElementById('result-email').innerHTML = email;

    //Name
    document.getElementById('result-givenname').innerHTML = givenname; 
    document.getElementById('result-surname').innerHTML = surname;

    //Shipping Address
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-apartmentsuite').innerHTML = apartmentsuite;
    document.getElementById('result-city').innerHTML = city;
    document.getElementById('result-stateterritory').innerHTML = stateterritory;
    document.getElementById('result-countryregion').innerHTML = countryregion;

    //Phone
    document.getElementById('result-phone').innerHTML = phone;

    //OrderTotal
    document.getElementById('result-ordertotal').innerHTML = ordertotal;


})