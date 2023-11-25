"use strict";
const firstStageForm = document.querySelector("#bookingfirststage");
const secondStageForm = document.querySelector("#bookingsecondstage");
const lastStageForm = document.querySelector("#bookinglaststage");
const mistressImage = document.querySelector("#mistressimage");
const planChnagerAmt = document.querySelector("#plan");
const bookingsFirst = document.querySelector("#bookingsFirst");
const choosePlan = document.getElementById("plan");
const bookingUserName = document.getElementById("bookingname");
const bookingUserEmail = document.getElementById("bookingmail");

const confirmBTN = document.querySelector("#confirmbtn");
// depending on the result gotten we hide or show the confirm btn
const nextBTN = document.querySelector("#nextbtn");

const payVIP = document.querySelector("#payvip");
const payReserved = document.querySelector("#payreserved");

const payRegular = document.querySelector("#payregular");


const payClick = (e) => {
  e.preventDefault();
  firstStageForm.style.display = "block";
  firstStageForm.scrollIntoView({ behavior: "smooth" });
};

payRegular.addEventListener("click", payClick);
payVIP.addEventListener("click", payClick);
payReserved.addEventListener("click", payClick);
galleryView.addEventListener("click", payClick);
bookingsFirst.addEventListener("click", payClick);

const totalAmt = document.getElementById("totalAmt");
const hourRate = document.getElementById("hourRate");
const currencyAmt = document.getElementById("currencyAmt");
// choose plan reset function 

const statesByCountry = {
  "USA": [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
  "CA": [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Northwest Territories",
    "Nunavut",
    "Yukon",
  ],
            "AUS":  [
  "Australian Capital Territory",
  "New South Wales",
  "Northern Territory",
  "Queensland",
  "South Australia",
  "Tasmania",
  "Victoria",
  "Western Australia",
  ],
            "UK":["England", "Scotland", "Wales", "Northern Ireland"]
            // Add more countries and states as needed
        };
       let stateVariable
        const countrySelect = document.getElementById("countrySelect");
const stateSelect = document.getElementById("stateSelect");
        const updateCurrency = ()=>{


currency = countrySelect.value === "UK" ? "£" : "$";
  const plan = choosePlan.value;
  if (plan == 'VIP' && currency=='$') {
    currencyAmt.value = "$ 100/hr"
  
  }
     if(plan == 'STANDARD' && currency=='$') {
        currencyAmt.value = "$ 75/hr";
  }
  
  if(plan == 'VIP' && currency=='£') {
    currencyAmt.value = "£ 80/hr";

  }
  if(plan == 'STANDARD' && currency=='£') {
    currencyAmt.value = "£ 60/hr";


  }

  totalAmt.value = currencyAmt.value
}

        function updateStates() {
          const selectedCountry = countrySelect.value;
            const stateVariable = statesByCountry[selectedCountry];
            populateStates(stateVariable);
        }

function populateStates(stateVariable) {
  stateSelect.innerHTML = ''; // Clear the state dropdown

  for (let i = 0; i < stateVariable.length; i++) {
    const option = document.createElement("option");
    option.text = stateVariable[i];
    stateSelect.add(option);
  }
  updateCurrency()

}

let currency;
updateStates(); // Initial population of states based on the default country
        


  choosePlan.addEventListener('change', updateCurrency)


hourRate.addEventListener('keyup', function (e) {
  const hour = e.target.value;
 currency = countrySelect.value === "UK" ? "£" : "$";

  if (hour < 1) return;
  const amountExtract = (currencyAmt.value).split('/').at(0).split(' ').at(1) *1

  totalAmt.value = `${currency} ${amountExtract * hour}`
})

