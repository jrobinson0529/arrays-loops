const students = ['Katy', 'Jackie', 'Sean', 'Nathan'];
// console.log(students.length);

// ******** ACCESSING ITEMS IN ARRAY ********
// console.log(students.pop());
// console.log(students[3]); or console.log(students[students.length - 1]); to see what the last index of an array is.

students[0] = "Matthew";
// console.log(students)

const valuePrinter = (array, index) => {
  return array[index];
};
// console.log(valuePrinter(students, 2));

const isNameHere = (array, name) => {
 return (array.includes(name) ? `${name} is here` : `${name} is not here`);
};

console.log(isNameHere(students, 'Greg'));
console.log(isNameHere(students, 'Sean'));
