const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //code here
  return (weight)/(height*height)
}


function getBMIMeaning(weight, height) {
  //code here
  let BMI = calculateBMI(weight, height)
  return  BMI < 18.5?'Underweight' 
  : BMI >= 18.5 && BMI <= 24.9 ?'Normal weight'
  : 'Overweight'
}

module.exports = getBMIMeaning

// BMI < 18.5 จะแสดงข้อความ "Underweight"
// BMI อยู่ในช่วง 18.5 -24.9 จะแสดงข้อความ "Normal weight"
// BMI > 25.0 จะแสดงข้อความ "Overweight"

