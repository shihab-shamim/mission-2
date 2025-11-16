// dynamically generalize kora  
type GenericArray<value> =Array<value>

// const friends :string[]=["ksk","shfjks","lshfs"];
// const friendss :Array<string>=["ksk","shfjks","lshfs"];
const friendss :GenericArray<string>=["ksk","shfjks","lshfs"];

// const rollNumbers:number[]=[2,3,4,5,6];
const rollNumbers:GenericArray<number>=[2,3,4,5,6];

const isEligibleList :GenericArray<boolean>=[true,false,true,false]


const sqrfun =(value:number)=>{
    return value * value
}

sqrfun(5)

type Coordinates<T> =[T,T]
const coordinates:Coordinates<number> =[20,30]

const coordinatesString:Coordinates<string> =["20","30"]


const userList:GenericArray<{user:string,id:string}>=[
    {user:"user1",id:"01"},
    {user:"user2",id:"02"},
    {user:"user3",id:"03"},

]





