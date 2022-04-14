'use strict'


// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const combine_result=fruits.join('|');
    //console.log(combine_result);
    
}
  
  // Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const arrayTostring = fruits.split(',');
    // console.log(arrayTostring);
    
    for (let i =0 ; i < arrayTostring.length; i++){
        // console.log("--");
        // console.log(arrayTostring[i]);
       

    }
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    // console.log(result);
    // console.log(array);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const array2 = array.splice(0,1);
    // console.log(array2);//[1,2]

    const array3 = array.slice(2,5);
    // console.log(array3);

    
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student)=>student.score === 90);
    // console.log(result);
}

// Q6. make an array of enrolled students
{
    const result =students.filter((student)=>student.enrolled);
    // console.log(result);

}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student)=>student.score);
    //console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // const result = students.find((student)=>student.score < 50);
    // console.log(result);
    const result = students.some((student)=>student.score < 50);
    //console.log(result/result.length); 

}

// Q9. compute students' average score
{
    // const result = students.reduce((prev,curr)=>{
    //     console.log('--------------------------------');
    //     console.log(prev);
    //     console.log(curr);

    //     return prev+ curr.score;

    // },0);
    const result = students.reduce((prev,curr)=>prev+ curr.score, 0);
    // console.log(result/students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student)=>student.score)
    //.sort((a,b)=>a-b)
    .join(',');
    console.log(result);
    // const resultTostring = result.join(',');
    // console.log(resultTostring);


}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map((student)=>student.score)
    .sort((a,b)=>a-b)
    .join(',');
    console.log(result);

    console.log(result);

}
