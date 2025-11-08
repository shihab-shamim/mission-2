// spreed operator 
const friends=["rahim","karim"]
const schoolFriends=["pinto","cinto","kinto"]
const collageFriends=["mr.mart","mr.very very smart"]
friends.push(...schoolFriends,...collageFriends)
// console.log(friends);


const  user={
    name:"shihab",
    number:"01745747594",

}

const otherInfo={
    hobby:"outing",
    favouriteColor:"black"

}

const useInfo:{}={...user,...otherInfo}
// console.log(useInfo);

// rest operator 

const sendInvite=(...friends:string[])=>{
    // console.log("send invitation",friend1,friend2,friend3);
   friends.forEach(a=>console.log(`send invitaiton=>${a}`))


}
sendInvite("helo","gelo","melo")