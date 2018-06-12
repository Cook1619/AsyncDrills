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