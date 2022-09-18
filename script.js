// Adding variables to store our data

const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function

const countLeters = (some_data) =>{
const price = some_data.replace(' ', '').length * 5; // price of each letter
userLeterPreview.textContent = some_data
userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}
const button = document.querySelector ('.buy-submit')

const buyNow = () => {
   if (userInput.value ==='') {
    alert ('Please Input letters')  
   }

   else if (userInput.value ==='YOUR NAME') {
    alert ('Please Enter Your custom letters')
   }

else if (userInput.value.length > 15) {
    alert ('You have Exceeded number of letters')
}

else {
    alert ('Good job')
}
}
button.addEventListener ('click', buyNow)