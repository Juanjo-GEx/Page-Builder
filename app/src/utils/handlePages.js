import { getRoutes } from "./handleRoutes"

export const setPages = (location) => { 

    const pagesRoutes = getRoutes();
    
    if (isSuccess){  

        if (pagesRoutes.length === 0){
            return pagesRoutes
        }

        pagesRoutes.filter(route => {
            route?.url === location
        })   
                
    }    
    

    return pagesRoutes
}