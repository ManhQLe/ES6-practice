const x = 10;
const y = 20;
const str = `the result of ${x} + ${y} is: ${x + y}`

console.log(str);

const teacher = {
    name: 'Mr. X'
}
const student = {
    name: 'Student Y',
    guardian:'Mr. Guardian'
}

const note = `${teacher.name},
    
    Please execuse ${student.name}.
    He is recovering from the flu.
    
    Thank you,
    ${student.guardian}`


console.log(note)
