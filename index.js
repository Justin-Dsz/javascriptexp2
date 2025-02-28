document.getElementById("but1").onclick=function(){
    let num=document.getElementById("ev-od").value;
    num=parseInt(num);
    if(isNaN(num)){
        document.getElementById("ans1").innerText="Please enter a valid number";
        return;
    }
    if(num%2==0){
        document.getElementById("ans1").innerText="The number is even";
    }
    else{
        document.getElementById("ans1").innerText="The number is odd";
    }

}

document.getElementById("but2").onclick=function(){
    let num=document.getElementById("c-f").value;
    num=parseInt(num);
    if(isNaN(num)){
        document.getElementById("ans2").innerText="Please enter a valid number";
        return;
    }
    let f=(num*9/5)+32;
    document.getElementById("ans2").innerText="The temperature in Fahrenheit is "+f;
}

document.getElementById("but3").onclick=function(){
    let sent=document.getElementById("longword").value;
    if(!isNaN(sent)){
        document.getElementById("ans3").innerText="Please enter a sentence";
        return;
    }
    let arr=sent.split(" ");
    var i=0,max="";
    while(i<arr.length){
        if(arr[i].length>max.length){
            max=arr[i];
        }
        i++;
    }
    document.getElementById("ans3").innerText=max;
}

document.getElementById("but4").onclick=function(){
    let array1 = document.getElementById("array1").value.split(',').map(Number);
    let array2 = document.getElementById("array2").value.split(',').map(Number);

    if (array1.some(isNaN) || array2.some(isNaN)) {
        document.getElementById("ans4").innerText = "Please enter valid arrays";
        return;
    }

    let isSubset = array2.every(val => array1.includes(val));
    document.getElementById("ans4").innerText = isSubset ? "Array 2 is a subset of Array 1" : "Array 2 is not a subset of Array 1";
}

document.getElementById("but5").onclick=function(){
    let expression = document.getElementById("expression").value;
    try {
        let result = evaluateExpression(expression);
        document.getElementById("ans5").innerText = "The result is " + result;
    } catch (e) {
        document.getElementById("ans5").innerText = "Invalid expression";
    }
}

function evaluateExpression(expr) {
    return Function('"use strict"; return (' + expr + ')')();
}

document.getElementById("but6").onclick=function(){
    let num = document.getElementById("number").value;
    num = parseInt(num);
    if (isNaN(num)) {
        document.getElementById("ans6").innerText = "Please enter a valid number";
        return;
    }
    document.getElementById("ans6").innerText = numberToWords(num);
}

function numberToWords(num) {
    const belowTwenty = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    if (num === 0) return "Zero";

    let word = '';

    function helper(num) {
        if (num === 0) return '';
        else if (num < 20) return belowTwenty[num] + ' ';
        else if (num < 100) return tens[Math.floor(num / 10)] + ' ' + helper(num % 10);
        else return belowTwenty[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100);
    }

    let i = 0;
    while (num > 0) {
        if (num % 1000 !== 0) {
            word = helper(num % 1000) + thousands[i] + ' ' + word;
        }
        num = Math.floor(num / 1000);
        i++;
    }

    return word.trim();
}
