let num;
function message(){
    console.log("Hello");
    num = 7;
    return num;
}
message();

function anotherMessage(){
    console.log(num * 4);
}
setTimeout(anotherMessage, 2000);

function getWords(){
    console.log('Hello');
    setTimeout(()=>{
        console.log('SecondWord')
    }, 2000)
    setTimeout(()=> {
        console.log('Covalance!!')
    }, 0)
    console.log('WordyWOrd');
}
getWords();

function countdown(num, cb){
    for(let i = num; num < 0; i-- ){
        console.log(num);
    }
    setTimeout(()=>{
        cb();
    }, num)
}

function done(){
    console.log('message in the console');
}

countdown(5000,done);

// let statement = true;

// let orderChickenSandwich = new Promise(function(resolve, reject){
//   if(statement === true){

//   }
// })