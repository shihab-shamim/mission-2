


// mapped types

// map 

const arrayOfNum:number[]=[32,33,23,32,33,33,3]

const arrayOfString:string[] =["3","74","63"]

const arrayOfStringUsingMap:string[]=arrayOfNum.map(num=>num.toString())

console.log(arrayOfStringUsingMap);

type AreaOfNumber={
    height:number,
    width:number,
}

type height =AreaOfNumber["height"]

type AreaOString={
    height:string,
    width:string,
}


type Area<T>={
    [key in keyof T]: T[key]
}


const area1:Area<{height:string,width:number}>={height:"267",width:78}

