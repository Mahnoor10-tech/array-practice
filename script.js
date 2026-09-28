
const marks = [75, 82, 90, 65, 88, 55, 95];
let marksText = "";

marks.forEach(function(mark) {

    marksText += mark + " ";

});

document.getElementById("marksDisplay").textContent =
    "Marks: " + marksText;



let total = 0;

marks.forEach(function(mark) {

    total = total + mark;

});

document.getElementById("totalMarks").textContent =
    "Total Marks: " + total;




const average = total / marks.length;

document.getElementById("averageMarks").textContent =
    "Average Marks: " + average.toFixed(2);




const passedMarks = marks.filter(function(mark) {

    return mark >= 70;

});

document.getElementById("passedMarks").textContent =
    "Passed Marks: " + passedMarks.join(", ");



const firstAbove90 = marks.find(function(mark) {

    return mark > 90;

});

document.getElementById("firstAbove90").textContent =
    "First Mark Above 90: " + firstAbove90;




const has90 = marks.includes(90);


if (has90) {

    document.getElementById("check90").textContent =
        "Does the array contain 90? Yes";

} else {

    document.getElementById("check90").textContent =
        "Does the array contain 90? No";

}




const highestMark = Math.max(...marks);


document.getElementById("highestMark").textContent =
    "Highest Mark: " + highestMark;




const lowestMark = Math.min(...marks);


document.getElementById("lowestMark").textContent =
    "Lowest Mark: " + lowestMark;



const students = [

    {
        name: "Ali",
        marks: 85
    },

    {
        name: "Sara",
        marks: 92
    },

    {
        name: "Ahmed",
        marks: 65
    },

    {
        name: "Ayesha",
        marks: 78
    }

];




const passedStudents = students.filter(function(student) {

    return student.marks >= 70;

});




const studentList = document.getElementById("studentList");


passedStudents.forEach(function(student) {

    const li = document.createElement("li");

    li.textContent =
        student.name + " - " + student.marks + " marks";

    studentList.appendChild(li);

});




const increasedMarks = marks.map(function(mark) {

    return mark + 5;

});

console.log("Original Marks:", marks);

console.log("Marks after adding 5:", increasedMarks);




marks.push(100);

console.log("After push():", marks);




marks.pop();

console.log("After pop():", marks);