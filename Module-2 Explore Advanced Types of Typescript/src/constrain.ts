//? constraint: strick  rules  deya

type Student={
    id:number,name:string,
}



function displayStudentInfo<T extends Student >(student: T): T {
  return student;
}


const student1 = {
  id: 1,
  name: "Shihab",
  dept: "CSE",
};

const student2 = {
  id: 2,
  name: "hello",
  dept: "History",
};

const student3 = {
    id: 2,
  name: "hello",
 hasWatch:true
};

// এখন generic function দিয়ে তাদের info দেখাই
const info1 = displayStudentInfo(student1);
const info2 = displayStudentInfo(student2);
const info3 = displayStudentInfo(student3);

// console.log(info1);
// console.log(info2);
console.log(info3);
