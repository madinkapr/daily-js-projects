const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";

const allChars = upperCase + lowerCase + number + symbol; // umumiylashtirilgan password (string)

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // random harflar tanlaydi
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    //agar biz belgilagan length hozirgi password lengthidan katta bolsa  passwordga tasodifiy belgilar qoshuradi
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password; // inputga qiymatni qoyadi
}


// copy paste qilish
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}