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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> feat/mirror-string


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
<<<<<<< HEAD
=======
>>>>>>> feat/reverse-string
=======


//mirrorString


//Method 1:
function mirrorString(wording) {
    let wordingLength = wording.length;
    let reverseWording = "";

    for (let i = 1; i <= wordingLength; i++) {
        reverseWording = reverseWording + wording[wordingLength-i] ;
    }

    if (wording == reverseWording) {
        return true;
    } else {
        return false;
    }
}
//Method 2:

// m 0=4
// a 1=3
// d 2=2
// a 3=1
// m 4=0

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



// Find the max of two numbers

function findMaxNumber(a,b) {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}
>>>>>>> feat/mirror-string


//Testing sourctree

//feat-test-create-branch