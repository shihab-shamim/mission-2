type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};



const user1: User = {
  id: 1,
  name: {
    firstName: "Shihab",
    lastName: "Shamim"
  },
  gender: "male",
  contactNo: "01309183907",
  address: {
    division: "Rajshahi",
    city: "Bogura"
  }
};


const user2: User = {
  id: 1,
  name: {
    firstName: "Shihab",
    lastName: "Shamim"
  },
  gender: "male",
  contactNo: "01309183907",
  address: {
    division: "Rajshahi",
    city: "Bogura"
  }
};


type AddFunction=(num1:number,num2:number)=>number

const add:AddFunction=(num1,num2)=> num1+num2 
