// conditional: je type condition ar opor nirvor korbe . 

// type A=null;
// type B= undefined

// type C= A extends number ?true: B extends number?true:false


type RichPeopleVehicle={
    bike:string;
    car:string;
    ship:string;


}
type CheckVehicle<T> = T extends keyof RichPeopleVehicle ?true:false

type HasBike =CheckVehicle<"ship">