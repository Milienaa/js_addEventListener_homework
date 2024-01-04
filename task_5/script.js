'use strict'

let countriesArray = ["Ukraine", "Poland", "United States", "Germany", "France", "Italy", "Spain", "China", "Japan", "Brazil"];

let countryInput = document.getElementById('countriesInput');
let countryList = document.getElementById('countryList');

countryInput.addEventListener('input', function () {
   let userInput = countryInput.value.toLowerCase();

    countryList.innerHTML = '';

    let filteredCountries = countriesArray.filter(function (country) {
        return country.toLowerCase().includes(userInput);
    });

    filteredCountries.slice(0, 10).forEach(function (suggestion) {
        let optionElement = document.createElement('option');
        optionElement.value = suggestion;
        countryList.appendChild(optionElement);
    });
});

countryInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
