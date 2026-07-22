// // 0-<18.5 underweight
// // 18.5-<25 normal
// // 25-<30 overweight
// // >=30 obesity

//function
function bmi(weight,height){
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