interface Developer <T ,B=null>{
    name:string,
    salary:number,
    device:{
        brand:string,
        model:string,
        releaseYear:string
    }
    smartWatch:T,
    bike?:B
}

const poorDeveloper:Developer<{
    heatRate:string,
    stopWatch:boolean
}>={
    name:"helje",
    salary:122,
     device:{
        brand:"hp",
        model:"A21",
        releaseYear:"2000"
    },
    smartWatch:{
   heatRate:"100",
   stopWatch:true

    }
}


const richDeveloper:Developer<{
        heatRate:string,
    stopWatch:boolean,
    sports:boolean,
    notification:boolean

}>={
    name:"dgdfg",
    salary:122000,
     device:{
        brand:"mac",
        model:"A21",
        releaseYear:"2000"
    },
    smartWatch:{
    heatRate:"string",
    stopWatch:true,
    sports:true,
    notification:true

    }
}