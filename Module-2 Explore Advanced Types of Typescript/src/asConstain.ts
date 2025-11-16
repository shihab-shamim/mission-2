// ? as const assertion

    //? enum  
    // ? set of fixed string leteral ak jaigai rakhe 

    // type UserRole='Admin' | 'Editor' |'Viewer'
    // enum UserRole{
    //     Admin="Admin",
    //     Editor="Editor",
    //     Viewer="Viewer"
    // }

    const UserRole ={
          Admin:"ADMIN",
        Editor:"EDITOR",
        Viewer:"VIEWER"
    } as const
    
// ? typeof operator
// ? keyof operator
 
 

    const canEdit =(role:(typeof UserRole)[keyof typeof  UserRole])=>{
        if(role === UserRole.Admin || role===UserRole.Editor){

            return true;
        }
        else{
            return false
        }
    }

    const isEditPermissable=canEdit(UserRole.Admin)
    console.log(isEditPermissable);
    
