type UserRole= "admin" | "user" | "guest"

const getDashboard=(role:UserRole)=>{
    if(role==="admin"){
        return 'admin dashboard'
    }
    else if(role==="user"){
        return 'user dashboard'
    }
    else{
           return 'guest dashboard'

    }
    
}

getDashboard("guest")



type Person = {
  name: string;
  age: number;
};

type Contact = {
  phone: string;
  email: string;
};

// Intersection 👉 Person + Contact
type PersonWithContact = Person & Contact;

const user: PersonWithContact = {
  name: "Shihab Shamim",
  age: 23,
  phone: "01309183907",
  email: "shihabshamim767@gmail.com"
};

console.log(user);
