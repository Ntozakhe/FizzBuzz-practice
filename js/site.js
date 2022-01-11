// get values
function getValues(){
    let firstValue = document.getElementById("userInput1").value;
    let lastValue = document.getElementById("userInput2").value;

    firstValue = parseInt(firstValue);
    lastValue = parseInt(lastValue);

if (Number.isInteger(firstValue) && Number.isInteger(lastValue)) {
    if(firstValue<1){
alert(`You have entered ${firstValue}, Please enter a value greater than 0`);
    }else{
    
    let numbers = generateNumbers(firstValue,lastValue);

    displayNumbers(numbers)
}
} else {
    alert("You must enter integer values");
}
}

//perform logic we put the user input in an array called numbers

function generateNumbers(v1,v2){
let numbers = [];

for(let i = v1; i <= v2; i++){
numbers.push(i);
}
return numbers;
}

//display everything

function displayNumbers(numbers){
    templateRows = "";
    for(let i=0; i<=numbers.length-1;i++){
    let show = numbers[i];

    if (show%3 === 0 && show%5 === 0) {
        templateRows  += `<tr><td class = "text-danger"><strong> FizzBuzz </strong></td></tr>`;
    }else if (show%3 === 0) {
        templateRows  += `<tr><td class = "text-success"><strong> Fizz </strong></td></tr>`;
    }
    else if (show%5 === 0) {
        templateRows  += `<tr><td class = "text-primary"> <strong>Buzz</strong> </td></tr>`;
    }
    else{
        templateRows  += `<tr><td>${show}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
    }       

        
        
}