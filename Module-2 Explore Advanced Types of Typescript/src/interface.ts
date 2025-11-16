type User ={
    name:string,
    age:number
}

// interface : object type :array ,object , function 
interface IUser{
 name:string,
    age:number
}

type Role ={
    role:"admin" | "user"
}

type userWithRole =User & Role

const user:IUser={
    
    name:"shihab",
    age:53,
    // role:"admin"
}
 
interface IUUserWithROle extends IUser{
    role:"admin" | "user"
}

const user1:IUUserWithROle={
    
    name:"shihab",
    age:53,
    role:"admin"
}



//  function 
type Add =(num1:number,num2:number)=>number
interface IAdd {
    (num1:number,num2:number):number

}

const add:IAdd =(num1,num2)=> num1+num2

interface IFriends {
    [index:number]:string
}


const friends:IFriends=["a","b","c"]