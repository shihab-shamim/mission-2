//  ? : ternary operator:decision making 
// ?? : nullish coalescing  operator
// ?.: optional chaining


const biyerJonnoEligible=(age:number)=>{
    // if(age >=21){
    //     console.log("you are eligable");
    // } else{
    //     console.log("not eligable ");
    // }

    const result=age>=21?"you are eligable":"not eligable"
    console.log(result);

}

biyerJonnoEligible(21)

const userTheme=undefined;
const selectTheme=userTheme ?? "light"
console.log(selectTheme);