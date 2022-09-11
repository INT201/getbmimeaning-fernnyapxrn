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
