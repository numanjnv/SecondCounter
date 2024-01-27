const plus = document.querySelector('.plus'),
minus = document.querySelector('.minus'),
num = document.querySelector('.num');

let a = 1;

plus.addEventListener('click', ()=>{
a++;
 a = (a < 10) ? '0' + a: a;
 num.innerText = a;

console.log('a');
})


minus.addEventListener('click', ()=>{
    a--;
     a = (a < 0) ? '0' - a: a;
     num.innerText = a;
     
    console.log('a');
    })



    function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_-+=<>?';
    
        let allChars = lowercaseChars;
        let password = '';
    
        if (includeUppercase) allChars += uppercaseChars;
        if (includeNumbers) allChars += numberChars;
        if (includeSymbols) allChars += symbolChars;
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChars.length);
            password += allChars.charAt(randomIndex);
        }
    
        return password;
    }
    
    // User preferences
    const passwordLength = 12;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;
    
    // Generate and display the password
    const generatedPassword = generatePassword(passwordLength, includeUppercase, includeNumbers, includeSymbols);
    console.log('Generated Password:', generatedPassword);

