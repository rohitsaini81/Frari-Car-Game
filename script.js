const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const car = document.querySelector('.car');
let up=400;
car.style.animationPlayState = 'paused';




    button1.addEventListener('click', function() {
    car.style.animationPlayState = 'running';

})
button2.addEventListener('click',function() {
    
    car.style.animationPlayState = 'paused';

})

button3.addEventListener('click',function() {
    up +=4;
    car.style.top=up+'px';

})

button4.addEventListener('click',function() {
    up -=4;
    car.style.top=up+'px';
})
