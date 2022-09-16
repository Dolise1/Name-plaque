// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replaceAll(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
  
  const buyNow = () =>{
    if (userInput.value ==='') {
        message.innerHTML='Please type in some letters'
        message.style.color='red';
      }

    if (userInput.value === input.placeholder){
        message.innerHTML = 'Please enter your custom letters'
        message.style.color = 'red';
     }   
    
    if(userInput.value.length > 15) {
        message.innerHTML= 'We have 15 letters left in stock, and you have exceeded the limit'.
        message.style.color = 'red';
    }
    
    else {
    message.innerHTML = 'Operation successful'
    message.style.color = 'green'    
    button.addEventListener('click, buyNow')
  