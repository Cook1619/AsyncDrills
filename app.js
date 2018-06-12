let num;
function message() {
    console.log("Hello");
    num = 7;
    return num;
}
message();

function anotherMessage() {
    console.log(num * 4);
}
setTimeout(anotherMessage, 2000);

function getWords() {
    console.log('Hello');
    setTimeout(() => {
        console.log('SecondWord')
    }, 2000)
    setTimeout(() => {
        console.log('Covalance!!')
    }, 0)
    console.log('WordyWOrd');
}
getWords();

function countdown(num, cb) {
    setTimeout(function () {
        console.log(num);
        num--
        if (num === 0) {
            return cb();
        }
    }, 1000)
}

function done() {
    console.log('message in the console');
}

countdown(5000, done);

let statement = true;
let error = 'ERROR!!!!';
orderChickenSandwich = () => {
    return new Promise((resolve, reject) => {
        if (statement === true) {
            let sandwich = {
                sandwich: 'chicken',
                veggies: 'lettuce'
            }
            resolve(sandwich);
        } else {
            reject(error)
        }
    })
}
let orderFood = orderChickenSandwich();
orderFood.then(function(resolve){
    console.log(resolve);
}, (error) =>{
    console.log(error)
})

