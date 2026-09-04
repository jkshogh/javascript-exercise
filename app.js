// // 0-<18.5 underweight
// // 18.5-<25 normal
// // 25-<30 overweight
// // >=30 obesity

//function
function checkBmi(weight,height){
    var bmi = weight/(height*height);
    if (bmi<18.5) {
        console.log("underweight");
    } else if (bmi<25) {
        console.log("normal");
    } else if (bmi<30) {
        console.log("overweight");
    } else {
        console.log("obesity");
    }
    return bmi;
}

//"ABC" -> "CBA"

function reverseString(input) {
    let result = "";
    let indexLength = input.length;
    for (let i = indexLength-1; i >= 0; i--) {
    // console.log(input[i]);
    result = result+input[i];
    }
    return result;
}


// printStar(x)

// 1. loop Star
// 2. loop Row  

//Dont delete my work!
function printStar(numberOfStar) {
    let loopStar = "";
    let loopRow = "";
    for (let i = 0; i < numberOfStar; i++) {
        loopRow = loopRow + loopStar + "*" + "\n"
        for (let y = 0; y < 1; y++) {
            loopStar = loopStar +"*";
            }
        }
    console.log(loopRow);   
}


//Correct version
function printStar (numberOfStar) {
    let array = [];

    for (let y = 0; y < numberOfStar;y++){
        let row = "";
        for (let i = 0; i <= y; i++) {
            row = row + "*";    
            }
        array.push(row)    
    }

    console.log(array.join("\n"))
}

function findMaxNumber(a,b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}

function mirrorStringv1(wording) {
    let wordingLength = wording.length;
    let result = 0;

    // wording[0]=wording[wordingLength-1]
    // wording[1]=wording[wordingLength-2]
    // wording[2]=wording[wordingLength-3]

    for (let i = 0; i < wordingLength; i++) {
        if (wording[i]==wording[wordingLength-(i+1)]) {
        result = result + 0 ;
        } else {
        result = 1;
        }
    }

    if (result==0) {
        return true;
    } else {
        return false;
    }
}

//FizzBuzz

function fizzBuzz (a,b) {
    let stringLength = b - a + 1
    let result = "" * 1

    for (let i = 0; i < stringLength; i++){
        result = result + 1;
            if  (result % 3 == 0 & result % 5 == 0){
                console.log ("FizzBuzz");
            } else if (result % 3 == 0){
                console.log ("Fizz");
            } else if (result % 5 == 0){
                console.log ("Buzz");
            } else {
                console.log(result)
            }               
    };      
            
}
