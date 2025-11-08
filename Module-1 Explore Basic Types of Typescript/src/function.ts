// function 
// arrow function , normal function

function add(a:number,b:number):number{
    return a+b

}
// console.log(add(5,5));

const sum=(num1:number,num2:number)=> num1+num2

// console.log(sum(5,50));


// object=> function=>method 

const poorUser={
    name:"shihab",
    balance:0,
    addBalance(value:number){
    const totalBalance=     this.balance+value;
    return totalBalance

    }
}


// console.log(poorUser.addBalance(200));
// console.log(poorUser.addBalance(200));

const arr:number[]=[1,3,4]

const sqrArray=arr.map((v:number):number=>v*v)
console.log(sqrArray);
