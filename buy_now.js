// ARROW FUNCTION
const buyNow = (e) =>{
    if (userInput.value ==='') {
        message.innerHTML='Please type in some letters'
        message.style.color='red';

    if (userInput.value === input.placeholder){
        message.innerHTML = 'Please enter your custom letters'
        message.style.color = 'red'
     }   
    }
    if(userInput.value.length > 15) {
        message.innerHTML='You have exceeded the number of available letters'
        message.style.color = 'red'
    }
    
}