//* Task Calculate Percentage//* 
//* TASK 1*//

var totalMarks = 700;
// console.log(totalMArks)

var science = +prompt("Enter your marks obtained in Science");
var math = +prompt("Enter your marks obtained in Math");
var sst = +prompt("Enter your marks obtained in Social Studies");
var computer = +prompt("Enter your marks obtained in Computer");
var physics = +prompt("Enter your marks obtained in Physics");
var urdu = +prompt("Enter your marks obtained in Urdu");
var english = +prompt("Enter your marks obtained in English");
// console.log("Science:",Science)
// console.log("Math:",Math)
// console.log("SST:",SST)
// console.log("Computer:", Computer)
// console.log("Physics:", Physics)
// console.log("Urdu:",Urdu)
// console.log("English:",English)
var totalMarksObtain = science + math + sst + computer + physics + urdu + english;
// console.log(toatlMarksObtain)
var percentage = (totalMarksObtain / totalMarks) * 100;
// console.log(percentage)
// alert("Total Marks Obtained: " + totalMarksObtain);
// alert("Percentage: " + percentage + "%");

if (percentage >=70 ) {
    // console.log("A+")
alert("Mubarrak ho! "  + percentage + " % bani hai, chalo ab mithai khilao!");
} else if (percentage >= 40) {
    // console.log("Just Pass")
alert("Shukar hai, pass hogaya!")
}
else 
{
        // console.log("fail")
    alert("Buhat mehnat ki zaroorat hai. Try harder next time.");
}



