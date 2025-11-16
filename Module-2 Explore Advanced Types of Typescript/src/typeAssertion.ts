let anything:any;
anything ="shihab";

//  typeAssertion

(anything as string)


const kgtoGmConvetert=(input:string | number):string | number |undefined=>{
    if(typeof input === "number")  return input *1000 ;

    else if(typeof input === "string"){
        const [value]=input.split(" ")
         return `converted output is : ${Number(value)*1000}`
    }

}

const result1=kgtoGmConvetert(2) as number
console.log(result1);

const result2=kgtoGmConvetert("2 kg")as string

console.log(result2);


//  example 

 type CustomError={
    message:string
 }
try {
    
} catch (error) {
    console.log((error as CustomError).message);
    
}