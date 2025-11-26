const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordGenerateBtn = document.getElementById('password-generate-btn')
const passwordLengthSlider = document.getElementById('password-length-slider')
let sliderValue = passwordLengthSlider.value;

passwordLengthSlider.addEventListener('input', function(event) {
    sliderValue = event.target.value
    document.getElementById('pw-length-span').textContent = sliderValue
})

passwordGenerateBtn.addEventListener('click', function() {
    let password1 = returnPassword(characters, sliderValue)
    let password2 = returnPassword(characters, sliderValue)
    document.getElementById('result1').textContent = password1
    document.getElementById('result2').textContent = password2
   
})



function returnPassword(chars, count) {
    // Interate through desired count value and grab random indexes from array, push them to final string
    let password = ''
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length)
        password += chars[randomIndex]
    }
    return password
}