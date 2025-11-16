//  generic function 

// const createArrayWithString=(value:string)=>[value]

// const createArrayWithNumber=(value:number)=>[value] 

// const createArrayWidthObj=(value:{id:number,name:string})=>[value]



const createArrayWithGeneric=<T>(value:T)=> [value]


const arrString=createArrayWithGeneric("apple")
const arrNumber=createArrayWithGeneric(89)
const arrobj=createArrayWithGeneric({id:123,name:"shihab"})


//  tuple
const createArrayWithTuple=<T ,X>(value1:T,value2:X)=> [value1,value2]

const res1=createArrayWithTuple("hello",12)


function identity<T>(value: T): T {
  return value;
}

// ব্যবহার
const num = identity<number>(42);    // T = number
const str = identity<string>("Hello"); // T = string

console.log(num); // 42
console.log(str); // Hello
