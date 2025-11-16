//? key of operator  

type RichPeoplesVehicle={
    car:string,   // key:value
    bike:string,
    cng:string
}

type MyVehicle1= 'bike' |  "car" | "cng"  

type MyVehicle2= keyof RichPeoplesVehicle;

const myVehicle:MyVehicle2="cng"

type User={
    id:number,
    name:string,
    address:object
}


const user:User ={
    id:333, //key:value
    name:"shihab",
    address:{
        city:"dhaka",
    },

}

// const myId=user?.id;
// const myId =user["id"];
// const myName =user["name"];
// const myAddress=user["address"];


const getPropoertyFromObj=<X>(obj:X,key:keyof X)=>{

    return obj[key]

}

const result1=getPropoertyFromObj(user,"name")

// console.log(result1);


const product={
    brand:"hp"
}

const student4:User = {
    id: 2,
  name: "hello",
  address:{}
//  hasWatch:true
};

const result2=getPropoertyFromObj(product,"brand")

const resutt3=getPropoertyFromObj(student4,"name")
console.log(resutt3);
