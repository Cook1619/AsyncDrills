// let num;
// function message(){
//     console.log("Hello");
//     num = 7;
//     return num;
// }
// message();

// function anotherMessage(){
//     console.log(num * 4);
// }
// setTimeout(anotherMessage, 2000);

function getWords(){
    console.log('Hello');
    setTimeout(console.log('AnotherWord'), 2000);
    setTimeout(console.log('ThirdWord'),0);
    console.log('WordyWOrd');
}
getWords();