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
