
// nullable types 

const getUser=(input:string |null)=>{
    if(input){
        console.log(`from db : ${input}`);
    }
    else {
        console.log('from db : all user ');
    }
}



// getUser(null)

//  unknown type

const discountCalculator =(input:unknown)=>{

}

discountCalculator(100)
discountCalculator("100")
discountCalculator(null)


//  never type 

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong!"); // এই function কখনো normal return করবে না
