const buttonColor = document.querySelector('.color');
buttonColor.addEventListener('click', rgb);
function randomNum(min, max) {
    let num = Math.round(Math.random() * (max - min) + min);
    return num
}
function getHex(num) {
    return num.toString(16);
}
function rgb() {
    let red = getHex(randomNum(0,255));
    let green = getHex(randomNum(0,255));
    let blue = getHex(randomNum(0,255));
    let hex = `#${red}${green}${blue}`;
    console.log('hex: ', hex);
    document.body.style.backgroundColor = hex;
}

//
const email = document.querySelector('.email');
const pass = document.querySelector('.password');
const sign = document.querySelector('.sign');
const user = {
    login:"qwerty@mail.ru",
    password:"pass123"
}
sign.addEventListener('click', () => {
    if (email.value === user.login && pass.value === user.password){
        alert('Hello User');
    }else {
        alert('Something is wrong');
    }
});

//
let count = 0;
const n = document.querySelector('.number');
const minus = document.querySelector('.minus');
const reset = document.querySelector('.reset');
const plus = document.querySelector('.plus');


minus.addEventListener('click', () => {
    count--;
    n.innerText = count;
    document.querySelector('.number').style.color = 'red'
})
plus.addEventListener('click', () => {
    count++;
    n.innerText = count;
    document.querySelector('.number').style.color = 'green'
})
reset.addEventListener('click', (mu) => {
    count = 0;
    n.innerText = count;
    document.querySelector('.number').style.color = 'black'
})
