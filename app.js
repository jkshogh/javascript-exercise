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

let getString = "";

function reverseString(input) {

    let indexLength = input.length;
    for (let i = indexLength-1; i >= 0; i--) {
    // console.log(input[i]);
    getString = getString+input[i];
    }
    return getString;
}
